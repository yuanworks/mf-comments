class CommentsController < ApplicationController
before_action :find_discussion
    
    def new
      @comment = Comment.new
    end
    
    def destroy
      if admin_signed_in?
        Comment.delete(params[:id])
        flash[:notice] = "Comment deleted successfully."
        redirect_back(fallback_location: root_path)
      end
    end

    def create
        
          
      @comment = @discussion.comments.new comment_params
      
      # if not signed in, cannot use the admin emails
      if !admin_signed_in? && Rails.application.config.x.disallowed_emails.include?(@comment.email)
        flash[:notice] = "You cannot use the email address you supplied: #{@comment.email}."
        return redirect_back(fallback_location: root_path)
      end
      
      @comment.ip_address = request.remote_ip

      if @comment.save
        flash[:notice] = "Comment posted successfully."
       	redirect_back(fallback_location: root_path)
      else
        #redirect_to :back, notice: "Your comment wasn't posted!"
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:author, :email, :url, :body, :ip_address)
    end

    def find_discussion
      @discussion = Comment.find_by_id(params[:comment_id]) if params[:comment_id]
      @discussion = Article.find_by_id(params[:article_id]) if params[:article_id]
    end

end


class CommentsController < ApplicationController
before_action :find_discussion

    def new
      @comment = Comment.new
    end
    
    def delete
      Comment.delete
      redirect_back(fallback_location: root_path)
    end

    def create
      @comment = @discussion.comments.new comment_params

      if @comment.save
       	redirect_back(fallback_location: root_path)
        #redirect_to :back, notice: 'Your comment was successfully posted!'
      else
        #redirect_to :back, notice: "Your comment wasn't posted!"
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:author, :email, :url, :body)
    end

    def find_discussion
      @discussion = Comment.find_by_id(params[:comment_id]) if params[:comment_id]
      @discussion = Article.find_by_id(params[:article_id]) if params[:article_id]
    end

end

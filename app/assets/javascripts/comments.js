
window.onload = initializeComments

function initializeComments() {
    setReplyLinks();
    console.log("finished initialize")
}

function setReplyLinks() {
    var replyLinks = document.getElementsByClassName("reply")
    console.log("caca")
    for (i = 0; replyLinks.length; i++) {
        replyLinks[i].addEventListener("click", moveReplyBox)
    }    
}

function moveReplyBox() {
    console.log(this)
    
    //
    this.parentElement.appendChild(document.getElementById("mfc-comment-box"));
    
    var form = document.getElementById("new_comment");
    var replyID = this.id.split('-')[2];
	
    form.action = "/comments/" + replyID + "/comments";
}
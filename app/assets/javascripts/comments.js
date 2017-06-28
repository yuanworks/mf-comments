
window.onload = initializeComments

// HELPERS
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function initializeComments() {
    setFormListeners();
    window.commentFormAction = document.getElementById("new_comment").action;
}

function setFormListeners() {
    var replyLinks = document.getElementsByClassName("reply");

    for (i = 0; i < replyLinks.length; i++) {
        replyLinks[i].addEventListener("click", moveReplyBox);
    }
    
    var divCancelReply = document.getElementById("mfc-cancel-reply");
    divCancelReply.addEventListener("click", cancelReply);
    divCancelReply.classList.add("hidden");
}

function moveReplyBox() {
    insertAfter(document.getElementById("mfc-comment-box"), this);
    
    var form = document.getElementById("new_comment");
    var replyID = this.id.split('-')[2];
    form.action = "/comments/" + replyID + "/comments";
    
    var divCancelReply = document.getElementById("mfc-cancel-reply");
    divCancelReply.classList.remove("hidden");
}

function cancelReply() {
    var form = document.getElementById("new_comment");
    form.action = window.commentFormAction;
    
    var lastComment = document.getElementById("mfc-comment-last");
    lastComment.appendChild(document.getElementById("mfc-comment-box"));
    
    var divCancelReply = document.getElementById("mfc-cancel-reply");
    divCancelReply.classList.add("hidden");
}
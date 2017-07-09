// window.onload won't work with turbolinks
//window.onload = initializeComments

//document.addEventListener("turbolinks:load", initializeComments);
initializeComments();

// HELPERS
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function initializeComments() {
    console.log("Initializing comments...");
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
    
    var spanToggleIP = document.getElementById('admin-options-toggle-ip');
    spanToggleIP.addEventListener("click", toggleIP);

    var spanToggleCommentID = document.getElementById('admin-options-toggle-id');
    spanToggleCommentID.addEventListener("click", toggleCommentID);
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

function toggleIP(e) {
    
    var userIPs = document.getElementsByClassName('user-ip');
    
    for (i = 0; i < userIPs.length; i++) {
        
        if (e.target.classList.contains('admin-options-on'))
            userIPs[i].classList.add('hidden');
        else
            userIPs[i].classList.remove('hidden');
    }
    
    e.target.classList.toggle('admin-options-on');
}

function toggleCommentID(e) {

    var userIDs = document.getElementsByClassName('user-id');
    
    for (i = 0; i < userIDs.length; i++) {
        
        if (e.target.classList.contains('admin-options-on'))
            userIDs[i].classList.add('hidden');
        else
            userIDs[i].classList.remove('hidden');
    }
    
    e.target.classList.toggle('admin-options-on');
    
}
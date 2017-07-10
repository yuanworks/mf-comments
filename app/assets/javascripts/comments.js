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
    
    // used to show user ID and IP options from localStorage
    retrieveAdminOptions();
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
    
    document.getElementsByClassName('leave-comment')[0].innerHTML = "Reply To Comment";
}

function cancelReply() {
    var form = document.getElementById("new_comment");
    form.action = window.commentFormAction;
    
    var lastComment = document.getElementById("mfc-comment-last");
    lastComment.appendChild(document.getElementById("mfc-comment-box"));
    
    var divCancelReply = document.getElementById("mfc-cancel-reply");
    divCancelReply.classList.add("hidden");
    
    document.getElementsByClassName('leave-comment')[0].innerHTML = "Leave a Comment";
}

function retrieveAdminOptions() {
    
    if (localStorage.getItem('admin-show-ip') === 'true') {
        
        document.getElementById('admin-options-toggle-ip').classList.add('admin-options-on');    
        var userIPs = document.getElementsByClassName('user-ip');
        
        for (i = 0; i < userIPs.length; i++) {
            userIPs[i].classList.remove('hidden');
        }
    }
    
    if (localStorage.getItem('admin-show-id') === 'true') {
        
        document.getElementById('admin-options-toggle-id').classList.add('admin-options-on');    
        var userIDs = document.getElementsByClassName('user-id');
        
        for (i = 0; i < userIDs.length; i++) {
            userIDs[i].classList.remove('hidden');
        }
    }
    
}

function toggleIP(e) {
    
    var showIP = e.target.classList.toggle('admin-options-on');
    localStorage.setItem('admin-show-ip', showIP);
        
    var userIPs = document.getElementsByClassName('user-ip');
    
    for (i = 0; i < userIPs.length; i++) {
        userIPs[i].classList.toggle('hidden');
    }
}

function toggleCommentID(e) {
    
    var showID = e.target.classList.toggle('admin-options-on');
    localStorage.setItem('admin-show-id', showID);
    
    var userIDs = document.getElementsByClassName('user-id');
    
    for (i = 0; i < userIDs.length; i++) {
        userIDs[i].classList.toggle('hidden');
    }
}
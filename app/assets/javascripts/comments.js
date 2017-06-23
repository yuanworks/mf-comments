
window.onload = initializeComments

// HELPERS
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function initializeComments() {
    setReplyLinks();
    console.log("finished initialize")
}

function setReplyLinks() {
    var replyLinks = document.getElementsByClassName("reply")

    for (i = 0; i < replyLinks.length; i++) {
        replyLinks[i].addEventListener("click", moveReplyBox)
        console.log("Eventlistener for:", replyLinks[i])
    }    
}

function moveReplyBox() {
    console.log(this)
    
    //
    insertAfter(document.getElementById("mfc-comment-box"), this);
    //this.parentElement.appendChild(document.getElementById("mfc-comment-box"));
    
    var form = document.getElementById("new_comment");
    var replyID = this.id.split('-')[2];
	
    form.action = "/comments/" + replyID + "/comments";
}
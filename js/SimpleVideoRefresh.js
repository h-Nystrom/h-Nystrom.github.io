// JavaScript source code

var parentElement = document.querySelector("#portfolioSection");

parentElement.addEventListener("click", doWork, false);

function doWork(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        
        if (e.target.type == "button") {
            var videoItem = e.target.parentNode.querySelector('.videoPlayer');
            if (videoItem != null) {
                videoItem.src = videoItem.src;
                console.log("Console: Button: Msg:" + clickedItem + " " + videoItem);
            }
        }
        else if (e.target.tabIndex == -1) {
            var videoItem = e.target.querySelector('.videoPlayer');
            if (videoItem != null) {
                videoItem.src = videoItem.src;
                console.log("Console: TabIndex: Msg:" + clickedItem + " " + videoItem);
            }
        }
    }
    e.stopPropagation();
}
    
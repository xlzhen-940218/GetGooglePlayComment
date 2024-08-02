/*
* 1.首先，在网页上自动点击更多评论按钮
* 1.First, automatically click the More Comments button on the page
*/
var pages = document.getElementsByClassName('VfPpkd-vQzf8d');
pages[pages.length-1].click();

/*
* 4.评论完全加载完毕，开始获取所有评论内容
* 4.Comments are fully loaded, start fetching all comment content
*/
function readAllComment(){
    var items = document.getElementsByClassName('odk6He')[0].children[1].children;
    var content = '';
    for(var i=0;i< items.length;i++){
        var time = items[i].getElementsByClassName('bp9Aid')[0].innerHTML;
        var text = items[i].getElementsByClassName('h3YV2d')[0].innerHTML;
        content += 'Comment Time：'+time+"\r\nComment Text："+text+"\r\n\r\n";
    }
    console.log(content);
}
/*
* 3.这个函数在弹出的更多评论弹窗中不停的执行滚动到底部方法，等待所有评论完全加载
* 3.This function continuously executes the method of scrolling to the bottom in the pop-up more comment pop-up window, waiting for all comments to be fully loaded
*/
function scrollToBottom(){
    var page = document.getElementsByClassName('fysCi')[0];
    
    var lastTop = page.scrollTop;
    console.log("scrollTop",page.scrollTop,"scrollHeight",page.scrollHeight);
    if(page.scrollTop < page.scrollHeight){
        page.scrollTop = page.scrollHeight;
        console.log("scrolling...",page.scrollTop);
        if(lastTop == page.scrollTop){
            //load complete,start get all comment
            readAllComment();
            return;
        }
        setTimeout(scrollToBottom,1000);
    }
}
/*
* 2.点击了更多评论按钮并等待1秒，开始执行scrollToBottom函数
* 2.Click the more comment button and wait for 1 second, start to execute the scrollToBottom function
*/
setTimeout(scrollToBottom,1000);

document.getElementsByClassName('VfPpkd-vQzf8d')[11].click();

function readAllComment(){
    var items = document.getElementsByClassName('odk6He')[0].children[0].children;
    var content = '';
    for(var i=0;i< items.length;i++){
        var time = items[i].getElementsByClassName('bp9Aid')[0].innerHTML;
        var text = items[i].getElementsByClassName('h3YV2d')[0].innerHTML;
        content += 'Comment Time：'+time+"\r\nComment Text："+text+"\r\n\r\n";
    }
    console.log(content);
}

function scrollToBottom(){
    var page = document.getElementsByClassName('fysCi')[0];
    
    var lastTop = page.scrollTop;
    console.log("scrollTop",page.scrollTop,"scrollHeight",page.scrollHeight);
    if(page.scrollTop < page.scrollHeight){
        page.scrollTop = page.scrollHeight;
        console.log("scrolling...",page.scrollTop);
        if(lastTop == page.scrollTop){
            readAllComment();
            return;
        }
        setTimeout(scrollToBottom,1000);
    }
}
setTimeout(scrollToBottom,1000);

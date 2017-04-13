if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var iconpicList=document.querySelectorAll('.link-content .iconpic');

for (var i = 0; i < iconpicList.length; i++) {
    iconpicList[i].style.background='url(images/link_content_'+ i +'.png)no-repeat center';
}

var poorList=document.querySelectorAll('.measure-poorlist ul li');

for (var i = 0; i < poorList.length; i++) {
    var icon=poorList[i].querySelector('.icon');
    var title=poorList[i].querySelector('.title');
    var line=poorList[i].querySelector('.line');
    var liWidth=poorList[i].offsetWidth;
    var iconWidth=icon.offsetWidth;
    var titleWidth=title.offsetWidth;
    var lineWidth=liWidth-iconWidth-titleWidth;
    line.style.width=lineWidth+'px';
}

window.onresize=function(){
    for (var i = 0; i < poorList.length; i++) {
        icon=poorList[i].querySelector('.icon');
        title=poorList[i].querySelector('.title');
        line=poorList[i].querySelector('.line');
        liWidth=poorList[i].offsetWidth;
        iconWidth=icon.offsetWidth;
        titleWidth=title.offsetWidth;
        lineWidth=liWidth-iconWidth-titleWidth;
        line.style.width=lineWidth+'px';
    }
}

var tabsNav=document.querySelectorAll('.tabsbox .tabsnav>div');
var tabscontent=document.querySelectorAll('.tabsbox .tabscontent>ul')

for (var i = 0; i < tabsNav.length; i++) {
    tabsNav[i].index=i;
    tabsNav[i].onclick=function(){
        for (var j = 0; j < tabsNav.length; j++) {
            tabsNav[j].className='';
            tabscontent[j].className='';
        }
        this.className='current';
        tabscontent[this.index].className='show';
    }
}

var backBtn=document.querySelector('.topnav .back');

backBtn.onclick=function(){
    window.history.back();
}

var familyPersonList=document.querySelectorAll('.familyperson .listcontent>ul>li');

for (var i = 0; i < familyPersonList.length; i++) {
    familyPersonList[i].onclick=function(){
        window.location.href='familyinfo.html'
    }
}

//µÇÂ¼




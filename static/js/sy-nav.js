//这里负责导航栏相关
document.addEventListener('DOMContentLoaded', function() {                       //鼠标事件-滚动
    var nav = document.querySelector('nav');
    var lastgo = 0;                                                            //下限
    var go = 10;                                                               // 滚动上限     像素
    var oldBackgroundColor = window.getComputedStyle(nav).backgroundColor;   //监听nav的两个属性
    var oldBackdropFilter = window.getComputedStyle(nav).backdropFilter;
    var oldheight = window.getComputedStyle(nav).height;
    var oldtop = window.getComputedStyle(nav).top;
    var oldleft = window.getComputedStyle(nav).left;
    var oldwidth = window.getComputedStyle(nav).width;
    var oldborderRadius = window.getComputedStyle(nav).borderRadius;
    var oldborderBottom = window.getComputedStyle(nav).borderBottom;
    window.addEventListener('scroll', function() {                                //窗口     执行    参数-视口垂直偏移     方法-匿名函数
        var NawToTop = window.pageYOffset || document.documentElement.scrollTop;  //获取现在  视口垂直偏移量   先左后右    对IE备用方案
        var NawChange = NawToTop > go;                                            //应该改变=   现在>上限

        if (NawChange) {                                                          //正确则↓
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';              // 替换属性
            nav.style.backdropFilter = 'blur(10px)'; 
            nav.style.height = '60px'; 
            nav.style.left = '0';
            nav.style.top = '0';
            nav.style.width = '100%' ;
            nav.style.borderRadius = '0px';
            nav.style.borderBottom = '2px solid rgba(255, 255, 255, 1)';
        } else {                                                                 // 错误↓
            nav.style.backgroundColor = oldBackgroundColor;                //不变
            nav.style.backdropFilter = oldBackdropFilter; 
            nav.style.height = oldheight; 
            nav.style.left = oldleft;
            nav.style.top = oldtop;
            nav.style.width = oldwidth;
            nav.style.borderRadius = oldborderRadius;
            nav.style.borderBottom = oldborderBottom;
        }
        lastgo = go;                                                     // 更新最后滚动位置
    });
});

//如果它给你哪个词画了黄线   那就是你写错了（
//孩子们这并不好笑
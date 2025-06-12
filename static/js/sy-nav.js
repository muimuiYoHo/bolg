//这里负责导航栏相关
document.addEventListener('DOMContentLoaded', function() {                       
    var nav = document.querySelector('nav');
    var go = 10;
    window.addEventListener('scroll', function() {
        var NawToTop = window.pageYOffset || document.documentElement.scrollTop; // 获取当前视口垂直偏移量
        var NawChange = NawToTop > go;
        window.requestAnimationFrame(function() {
            if (NawChange) { 
                nav.classList.add('nav-启动');
            } else {
                nav.classList.remove('nav-启动');
            }
        });
    });
});

//如果它给你哪个词画了黄线   那就是你写错了（
//孩子们这并不好笑
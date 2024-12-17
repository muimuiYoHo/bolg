//这里负责音频相关
document.addEventListener('click', function(event) {
    if (event.target.closest('a')) {                    
     return;                                                   //  检查<a> 标签
    }
    if (event.target.closest('span')) {                       //
        return;                                   
       }
    if (event.target.closest('video')) {                     //
        return;                                   
       }
    const Ciallo = document.createElement('audio');
    Ciallo.src = 'static/sound/ciallo.aac';
    Ciallo.preload = 'auto';                                      // 预加载
    Ciallo.autoplay = true;                                      // 自动播放
    Ciallo.controls = false;                                     // 隐藏控件
    Ciallo.play().catch(error => {                                   // 新增报错
        console.error('Error playing audio:', error);
    });
    Ciallo.addEventListener('ended', function() {                      // 清理
        Ciallo.remove();
    });
});
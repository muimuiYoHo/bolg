//这里是进度条相关
var 进度条 = document.getElementById('进度条');
var 更新判断;
function 更新进度条() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;     //y    
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;//全y
  var progress = (scrollTop / (scrollHeight - window.innerHeight)) * 100;           //反向计算进度  x=y/(全y-窗口经过y)
  var borderRadius = window.getComputedStyle(进度条).borderRadius;
  if (scrollTop === 0) {
    进度条.style.width = '0%';
  } else {                                                                     // 未动到底更新
    进度条.style.display = 'block'; 
    进度条.style.width = progress + '%';
    if (scrollTop + window.innerHeight === scrollHeight) {        // 滚到底隐藏                                                         奶奶的为什么无法触发
      setTimeout(function() {
//        进度条.style.opacity = '0';
        进度条.style.borderRadius = '0px';
      }, );
    }
  }
  更新判断 = null;
}
function scrollHandler() {
  if (!更新判断) {
    更新判断 = requestAnimationFrame(更新进度条);
  }
}
window.addEventListener('scroll', scrollHandler);   
进度条.style.display = 'none'; 
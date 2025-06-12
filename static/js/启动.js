document.addEventListener('DOMContentLoaded', function() {
    const hasVisited = localStorage.getItem('hasVisited');
    const 进入博客 = document.querySelector('.loading');
    const loading方块 = document.querySelector('.loading方块');
    let 动画执行次数 = 0;
    if (!hasVisited)  {
        localStorage.setItem('hasVisited', 'true');
    } else {
        hideLoading(进入博客);
    }
    loading方块.addEventListener('animationiteration', () => {
        动画执行次数++;
        if (动画执行次数 === 2) {
            hideLoading(进入博客);
        }
    });
});
function hideLoading(进入博客) {
    const loading动画 = document.querySelector('.loading动画');
    loading动画.style.transform = 'translate(-50%, -50%) scale(.7)';
    进入博客.style.opacity = '0';
    setTimeout(() => {
        进入博客.style.display = 'none';
    }, 500);
}

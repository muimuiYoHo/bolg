document.addEventListener('DOMContentLoaded', function() {
    const hasVisited = localStorage.getItem('hasVisited');
    const 进入博客 = document.querySelector('.loading');
    const loading状态 = document.querySelector('.loading方块');
    let 动画执行次数 = 0;
    if (!hasVisited)  {
        localStorage.setItem('hasVisited', 'true');
    } else {
        hideLoading(进入博客);
    }
    loading状态.addEventListener('animationiteration', () => {
        动画执行次数++;
        if (动画执行次数 === 2) {
            loading状态.style.animation = 'none'; 
            loading状态.parentElement.style.display = 'none';
            hideLoading(进入博客);
        }
    });
});
function hideLoading(进入博客) {
    进入博客.style.opacity = '0';
    setTimeout(() => {
        进入博客.style.display = 'none';
    }, 500);
}

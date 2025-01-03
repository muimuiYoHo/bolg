// 这里是置顶
document.addEventListener('DOMContentLoaded', (event) => {
    const backToTop = document.getElementById('backToTop');
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        // 如果页面滚动超过200px显示按钮
        if (window.scrollY > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });                                                      
    backToTop.addEventListener('click', () => {             // 点击按钮时滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'                                  // 平滑滚动
        });
    });
});
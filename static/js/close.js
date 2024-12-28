// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const backToTop = document.getElementById('backToTop');
    // 监听滚动事件
    //window.addEventListener('scroll', () => {
        // 如果页面滚动超过一定距离（例如200px），则显示按钮
    //    if (window.scrollY > 200) {
    //        backToTopBtn.style.display = 'block';
    //    } else {
    //        backToTopBtn.style.display = 'none';
    //    }
    //});

    // 点击按钮时滚动到页面顶部
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    });
});
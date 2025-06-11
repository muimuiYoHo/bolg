//这里负责公告相关    
document.addEventListener('DOMContentLoaded', function() {
    const gg = document.querySelector('div[data-公告]');
    const sygg = document.querySelector('.sy-0');
    const hasVisited = localStorage.getItem('hasVisited');
    // const hasVisited = false;
    if (!hasVisited) {
        localStorage.setItem('hasVisited', 'true');
        if (gg) {
            gg.classList.add('sy-0-gg-显示');
            setTimeout(() => {
                gg.classList.remove('sy-0-gg-显示');
                scheduleHide(sygg);
            }, 6000);
        }
    } else {
        if (sygg) {
            sygg.style.display = 'none';
        }
        console.log('hasVisited是正确说明你已访问过页面', hasVisited);
    }
});
function closeAnnouncement() {
    const gg = document.querySelector('div[data-公告]');
    const sygg = document.querySelector('.sy-0');
    if (gg) {
        gg.classList.add('sy-0-gg-关闭');
        gg.classList.remove('sy-0-gg-显示');
        localStorage.setItem('hasVisited', 'true');
        setTimeout(() => {
            scheduleHide(sygg);
        }, 500);
    }
}
function scheduleHide(element) {
    if (element) {
        setTimeout(() => {
            element.style.display = 'none';
        }, 500);
    }
}


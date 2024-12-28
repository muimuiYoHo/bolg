//这里负责公告相关
document.addEventListener('DOMContentLoaded', function() {
    // 显示公告
    var gg = document.getElementById('sy-0');
    gg.style.display = 'flex';
    //setTimeout(closeAnnouncement, 5000);     // 5秒后自动关闭
});

function closeAnnouncement() {
    var gg = document.getElementById('sy-0');
    gg.style.display = 'none';
}
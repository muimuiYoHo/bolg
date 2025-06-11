document.addEventListener('DOMContentLoaded', function() {
    const 左控件 = document.querySelector('.sy-2-轮播器-控件-左');
    const 右控件 = document.querySelector('.sy-2-轮播器-控件-右');
    let 是否动画 = false;
    function 添加动画(元素, 动画类名, 持续时间) {
        if (是否动画) return;
        是否动画 = true;
        元素.classList.add(动画类名);
        setTimeout(() => {
            元素.classList.remove(动画类名);
            是否动画 = false;
        }, 持续时间); 
    }
    左控件.addEventListener('mouseenter', function() {
        添加动画(左控件, 'sy-2-轮播器-控件-左-动画', 500);
    });
    右控件.addEventListener('mouseenter', function() {
        添加动画(右控件, 'sy-2-轮播器-控件-右-动画', 500);
    });
    左控件.addEventListener('click', function() {
        右控件.classList.remove('animate');
        左控件.classList.add('animate');
    });
    右控件.addEventListener('click', function() {
        左控件.classList.remove('animate');
        右控件.classList.add('animate');
    });
});
let 轮播内容标识 = 0;
const 播放位置 = [
    "translate(0.16%, 0%) scale(1.01)",
    "translate(-33.325%, 0%) scale(1.01)",
    "translate(-66.82%, 0%) scale(1.01)"
];
const 轮播内容文本 = [
    {
        标题: "プラナちゃん、なに..？普拉娜酱、怎么...?",
        介绍1: "画师:セトマン Pid:130472001",
        介绍2: "普拉娜可爱爱❤"
    },
    {
        标题: "星空と少女 星空与少女",
        介绍1: "画师:Stella Pid:1093013961",
        介绍2: "虽然是AI画的 但是很可爱❤"
    },
    {
        标题: "昨日はありがとうね、先生。昨天谢谢啦，老师",
        介绍1: "画师:Anno Pid:112438261",
        介绍2: "嘿嘿❤大叔~"
    }
];
function 轮播器() {
    const 轮播器内容 = document.querySelector('div[data-轮播器]');
    轮播器内容.style.transform = `${播放位置[轮播内容标识]}`;
    const 控件标题 = document.querySelector('.sy-2-轮播器-控件-标题');
    const 控件介绍1 = document.querySelector('.sy-2-轮播器-控件-介绍1');
    const 控件介绍2 = document.querySelector('.sy-2-轮播器-控件-介绍2');
    控件标题.textContent = 轮播内容文本[轮播内容标识].标题;
    控件介绍1.textContent = 轮播内容文本[轮播内容标识].介绍1;
    控件介绍2.textContent = 轮播内容文本[轮播内容标识].介绍2;
    const 指定控件们 = document.querySelectorAll('.sy-2-轮播器-控件-顺序指定 > div');
    指定控件们.forEach((控件, index) => {
        控件.classList.remove('sy-2-轮播器-控件-当前指定');
        if (index === 轮播内容标识) {
            控件.classList.add('sy-2-轮播器-控件-当前指定');
        }
    });
}
function 自动轮播() {
    轮播内容标识 = (轮播内容标识 + 1) % 播放位置.length;
    轮播器();
}
setInterval(自动轮播, 5000);
自动轮播();
function moveSlide(direction) {
    轮播内容标识 = (轮播内容标识 + direction + 播放位置.length) % 播放位置.length;
    轮播器();
}
function selectSlide(index) {
    轮播内容标识 = index;
    轮播器();
}





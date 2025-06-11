//到底是谁不嫌烦在用@keyframs+steps做打字机啊
const solgan = ["你好, ","これは傲娇のnew博客 ", "傲娇永不退环境！ "];              // 放文字库                      有bug但是加个 就看不出bug了   出院！
const 文字动画 = document.getElementById('txt');                                 // 找id标签
let solganGo = 0;                                                               // 指向字库的solgan   0~2
let 延迟 = 1000;                                                                // 初始延迟1s
let 字符下标 = 0;                                                               // solgan的字符下标号
let 删除状态 = false;                                                           // 删除状态   初始为不删除
let 显示延迟 = 100;                                                             // 显示延迟     影响字符显示速度
let 等待 = 1500;                                                                // 等待延迟
function 现在的Solgan是() {
    文字动画.textContent = solgan[solganGo].substring(0, 字符下标);              //大佬说用截断字符    不要多问
    switch (true) {
        case (!删除状态):                                                       //如果是不删除状态
            延迟 = 显示延迟;                                                    //0.1s显示一个字符
            字符下标++;                                                         //增加字符下标 逐一显示字符
            if (字符下标 === solgan[solganGo].length) {                          //下标数为字库中字符数时
                延迟 = 等待;                                                    //水饺1.5s
                删除状态 = true;                                                //改状态为删除  
            }
            break;
        case (删除状态):                                                         // 如果是删除状态
            延迟 = 显示延迟;                                                    //0.1s删除一个字符
            字符下标--;                                                         // 减少字符下标  逐一删除字符
            if (字符下标 === 0) {                                                  //当字符删完
                solganGo++;                                                     //solgan字库指向+1  
                if (solganGo >= solgan.length) {                                //当solgan字库指向超出实际
                    solganGo = 0;                                                // 指向归零
                }
                字符下标 = solgan[solganGo].length;                             // 重置字符下标为当前solgan长度              我为什么要多此一举来着？
                字符下标 = 0;                                                   // 重置字符下标
                删除状态 = false;                                              //改状态为不删除
            }
            break;
    }
    setTimeout(现在的Solgan是, 延迟);                                            //执行 显示/删除 后都水饺1s
}
现在的Solgan是();                                                                //继续执行同一函数
//https://penghy.com/?p=typing-switching-animation-with-a-html-single-file
//有修改
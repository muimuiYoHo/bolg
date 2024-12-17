//到底是谁不嫌烦在用@keyframs+steps做打字机啊
const solgan = ["你好, ","これは傲娇のnew博客 ", "傲娇永不退环境！ "];          // 放文字库         有bug但是加个 就看不见bug了   出院！
const txt = document.getElementById('txt');                                  // 找id标签
let solganGo = 0;                                                            // 引导变量
let delay = 1000;                                                            // 初始延迟
let txtx = 0;                                                                // 字符下标
let deltxtx = false;                                                         // 删除状态
let delay1 = 100;                                                            // 显示延迟
let delay2 = 1500;                                                           // 等待延迟
const WhatTheSolgan = () => {
    txt.textContent = solgan[solganGo].substring(0, txtx);                   // 大佬说用截断字符    不要多问
    switch (true) {                                                        
        case (!deltxtx):                                                     // 如果不是删除状态
            delay = delay1;
            txtx++;                                                          //增加字符下标
            if (txtx === solgan[solganGo].length) {                          //撞墙睡觉
                delay = delay2;
                deltxtx = true;                                              //改删除状态   
            }
            break;
        case (deltxtx):                                            
            delay = delay1;                                            
            txtx--;                                                         // 减少字符下标
            if (txtx === 0) {                               
                solganGo++;                                    
                if (solganGo >= solgan.length) { 
                    solganGo = 0;                                           // 归零继续
                }
                txtx = solgan[solganGo].length;                             // 重置字符下标
                txtx = 0;
                deltxtx = false;                                            //改非删除状态
            }
            break;
    }

    setTimeout(WhatTheSolgan, delay);                                       //睡醒继续
};

WhatTheSolgan();  
//https://penghy.com/?p=typing-switching-animation-with-a-html-single-file
//有修改
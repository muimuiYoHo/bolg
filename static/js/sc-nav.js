document.addEventListener('DOMContentLoaded', function() {                    
    var nav = document.querySelector('nav');
    var lastgo = 0;                                                           
    var go = 10;                                                             
    var oldBackgroundColor = window.getComputedStyle(nav).backgroundColor;  
    var oldborderBottom = window.getComputedStyle(nav).borderBottom;
    window.addEventListener('scroll', function() {                              
        var NawToTop = window.pageYOffset || document.documentElement.scrollTop; 
        var NawChange = NawToTop > go;                                            
        if (NawChange) {                                                         
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';      
            nav.style.borderBottom = '2px solid rgb(0, 0, 0)';      
        } else {                                                                
            nav.style.backgroundColor = oldBackgroundColor;  
            nav.style.borderBottom = oldborderBottom;         
        }
        lastgo = go;                                                  
    });
});
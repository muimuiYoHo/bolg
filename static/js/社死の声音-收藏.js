document.addEventListener('click', function(event) {
    if (event.target.closest('a')) {                    
     return;                                                  
    }
    if (event.target.closest('span')) {                       
        return;                                   
       }
    if (event.target.closest('video')) {                   
        return;                                   
       }
    const Ciallo = document.createElement('audio');
    Ciallo.src = '../sound/ciallo.aac';
    Ciallo.preload = 'auto';                                     
    Ciallo.autoplay = true;                                     
    Ciallo.controls = false;                                  
    Ciallo.play().catch(error => {                                
        console.error('Error playing audio:', error);
    });
    Ciallo.addEventListener('ended', function() {                   
        Ciallo.remove();
    });
});
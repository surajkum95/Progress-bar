function loadProgressBar(){
    let innerdivPercentage = 0;
    const innerdiv = document.querySelector('.inner');
    let interval = setInterval(function(){
        if(innerdivPercentage >= 100){
            clearInterval(interval);
        }
        innerdiv.style.width =  (innerdivPercentage++) + '%';
    }, (2*1000)/100);
}
const card = document.querySelector('.circle');
const introDiv = document.querySelector('.intro');
const intro = document.querySelector('.intro h1');
const toggler = document.querySelector('.toggler');
const togglerH3 = document.querySelector('.toggler h3');
const body = document.querySelector('body');
const atags = document.querySelectorAll('.socials a');
let checker = false;

card.addEventListener('mousemove',(e)=>{

    let yAxis = (window.innerHeight/2 - e.pageY)/15;
    let xAxis = (window.innerWidth/2 - e.pageX)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

toggler.addEventListener('click',function(){

    if (checker == false){
        atags.forEach(i =>{
            i.style.color = '#c00b4e';
        });
        toggler.style.background = 'white';
        togglerH3.style.color = 'black';

        body.style.background = 'black';
        introDiv.style.border = '2px #c00b4e dotted';
        card.style.border = '3px #c00b4e solid';
        intro.style.color = '#c00b4e';
        checker = true;

    }else{

        body.style.background = '#D81C3D';
        introDiv.style.border = '2px black dotted';
        toggler.style.background = 'black';
        togglerH3.style.color = 'white';
        card.style.border = '3px solid black';
        intro.style.color = 'black';
        atags.forEach(i=>{
            i.style.color = 'black';
        });
        checker = false;

    }

});

card.addEventListener('mouseenter',function(){
    
    intro.style.transform = 'translateZ(100px)';
    intro.style.color = 'white';
    intro.style.filter = 'drop-shadow(0 0 0.5rem white)';
    introDiv.style.border = '2px white dotted';
    introDiv.style.transform = 'translateZ(50px)';

});

card.addEventListener('mouseleave',function(){

    if (checker == false){

        intro.style.transform = 'translateZ(0px)';
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        intro.style.color = 'black';
        intro.style.filter = 'none';
        introDiv.style.border = '2px black dotted';
        introDiv.style.transform = 'translateZ(0px)';

    }else{
        
        intro.style.transform = 'translateZ(0px)';
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        intro.style.color = '#c00b4e';
        intro.style.filter = 'none';
        introDiv.style.border = '2px #c00b4e dotted';
        introDiv.style.transform = 'translateZ(0px)';

    }

});





    



// slide change js code
var slideImg = document.getElementById('slideimg');
var images = new Array(
    "../img/bg2.jpg",
    "../img/bg3.jpg",
    "../img/bg4.jpg"
);

var len = images.length;
var i = 0;

function slider(){
    if(i> len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2800);
}

// service section slide up on scroll js code
// window.addEventListener('scroll', reveal)

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i=0;i<reveals.length; i++){
//         var windowheight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientRect().top;
//         var revealPoint = 100;

//         if(revealTop < windowheight-revealPoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.remove('active');
//         }


//     }
// }

//click accordion function for javascript-->

function Accordion(element){
    const panelHeadings = element.querySelectorAll('.mission');
    const panelContent = element.querySelectorAll('.abouts-d');

    let activepanle = null;
    let activepanelIndex = -1;
    let verticalPadding = 15;

    const activatepanle = (index)=> {
        panelContent[index].style.height = 
        panelContent[index].scrollHeight + (verticalPadding * 2) + 'px' ;
        panelHeadings[index].style.padding = `${verticalPadding}px 18px`;
    };

    const togglePanel = (index) => {
        const panel = panelHeadings[index];
        if(panel !== activepanle){
            activepanle.classList.remove('activa');
            panelContent[activepanelIndex].style.height = '0px';
            panelContent[activepanelIndex].style.padding = '0px';

            activatepanle(index);
            panel.classList.add('activa');

            activepanle = panel;
            activepanelIndex = index;
        }
    }
        panelHeadings.forEach((panel,index)=>{
            panel.classList.remove('activa');

            if (index === 0){
                activepanle = panel;
                activepanelIndex = index;
                panel.classList.add('activa');
                activatepanle(index)
            }
            panel.addEventListener('click', () => togglePanel(index))
        })
}

new Accordion(document.querySelector('.abouts-right'));


// count animation javascript code
 var experience = setInterval(expYear, 10)
 var project = setInterval(projectDone, 10)
 var coustomer = setInterval(happyCoustomer, 10)
 var award = setInterval(awardWin, 10)
 let exp = 1;
 let proj = 1;
 let coust = 1;
 let awar = 1;

 function expYear(){
     exp++;
     document.querySelector('#number1').innerHTML = exp;

     //stop at given condition
     if(exp == 40){
         clearInterval(experience)
     }
 }

 function projectDone(){
    proj++;
    document.querySelector('#number2').innerHTML = proj;

    //stop at given condition
    if(proj == 1500){
        clearInterval(project)
    }
}

function happyCoustomer(){
    coust++;
    document.querySelector('#number3').innerHTML = coust;

    //stop at given condition
    if(coust == 2100){
        clearInterval(coustomer)
    }
}

function awardWin(){
    awar++;
    document.querySelector('#number4').innerHTML = awar;

    //stop at given condition
    if(awar == 110){
        clearInterval(award)
    }
}

//testimonies slider
// var btn = document.getElementsByClassName('btnn');
// var slide = document.getElementById('sliderr');

// btn[0].onclick = function(){
//     slide.style.transform = 'translateX(0PX)';
//     for(i=0;i<3;i++){
//         btn[i].classList.remove('pactive');
//     }
//     this.classList.add('pactive');
// }
// btn[1].onclick = function(){
//     slide.style.transform = 'translateX(-800PX)';
//     for(i=0;i<3;i++){
//         btn[i].classList.remove('pactive');
//     }
//     this.classList.add('pactive');
// }
// btn[2].onclick = function(){
//     slide.style.transform = 'translateX(-1600PX)';
//     for(i=0;i<3;i++){
//         btn[i].classList.remove('pactive');
//     }
//     this.classList.add('pactive');
// }

// navbar javscript code
// burger = document.querySelector('.burger');
// navabr = document.querySelector('.navabr');
// navbar = document.querySelector('.navbar-menu');

// burger.addEventListener('click', ()=>{
//     navabr.classList.toggle('h-resp');
//     navbar.classList.toggle('v-resp');
// })


//side menu toggle

const toggle = document.getElementById('toggle');
const slidebar = document.getElementById('slidebar');

toggle.onclick = function(){
    toggle.classList.toggle('sctive')
    slidebar.classList.toggle('sctive')
}

//to-top javascript code

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset>100){
        toTop.classList.add('active')
    }
    else{
        toTop.classList.remove('active')
    }
})
    
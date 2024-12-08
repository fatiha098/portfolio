// drop down

const menu = document.getElementById("menu-bar");
const xmark = document.getElementById('xmark');
const skillsNames = document.getElementsByClassName('skillName')
const skillsSection = document.getElementById('skills');



//display menu
menu.addEventListener('click', function(){

  const ul = document.querySelector('.home nav ul');
  

  
  ul.style.display = 'block';
  ul.style.background = 'rgb(8 8 8 / 84%)';
  ul.style.position = 'absolute';
  ul.style.top = '97%';
  ul.style.width = '100%';
  ul.style.left = '0%';

})

// cancel menu

xmark.addEventListener('click', function(){

  const ul = document.querySelector('.home nav ul');
  ul.style.display = 'none';

})



  if(skillsSection.getBoundingClientRect().top < window.innerHeight && skillsSection.getBoundingClientRect().bottom > 5 ){
    for (let i = 0; i < skillsNames.length; i++) {
          
          skillsNames[i].style.transform = "translateX(13rem)";
          skillsNames[i].style.transition = "transform 0.5s linear";
          skillsNames[i].style.visibility = "visible";
    
    }
    
  }


//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting ){

//           entry.target.classList.add('show');
//         }
//         else {
//           entry.target.classList.remove('show');
//         }
      
//           // skillsNames[i].style.visibility = "visible";
//           // skillsNames[i].style.transform = "translateX(13rem)";
//           // skillsNames[i].style.transition = "transform 0.5s linear";
//         }
//         )
//       }
//       )
      
// const hiddenEleme = document.querySelector('.hidden')
//  Array.from(hiddenEleme).forEach((elem) => observer.observe(elem));



// transition skillnae 
// skillsNames.forEach(skillName => {
//   skillName.style.transform = "translateX(13rem)";
//   skillName.style.transition = "transform 0.5s ease-in";
// });


let progressBar = document.getElementsByClassName('cercle-progress');
let valueProgress = document.getElementsByClassName('value');

let progressValue0 = 0 ;
let progressValue1 = 0 ;
let progressValue2 = 0 ;
let progressValue3 = 0 ;
let progressEndValue0 = 65;
let progressEndValue1 = 70;
let progressEndValue2 = 90;
let progressEndValue3 = 85;
let speed = 20;

console.log(progressBar[0]);
// let progress = setInterval( () => {
//   progressValue++;
//   valueProgress.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(
//     #ff5d00 ${progressValue * 3.6}deg,
//     white ${progressValue * 3.6}deg
//   )`;
//   if(progressValue == progressEndValue){
//     clearInterval(progress)
//   }
// }, speed)

let progress = setInterval( () => {
  progressValue0++;
  valueProgress[0].textContent = `${progressValue0}%`;
  progressBar[0].style.background = `conic-gradient(
    #ff5d00 ${progressValue0 * 3.6}deg,
    white ${progressValue0 * 3.6}deg
  )`;
  if(progressValue0 == progressEndValue0){
    clearInterval(progress);
  }
}, speed)

let progress1 = setInterval( () => {
  progressValue1++;
  valueProgress[1].textContent = `${progressValue1}%`;
  progressBar[1].style.background = `conic-gradient(
    #ff5d00 ${progressValue1 * 3.6}deg,
    white ${progressValue1 * 3.6}deg
  )`;
  if(progressValue1 == progressEndValue1){
    clearInterval(progress1);
  }
}, speed)


let progress2 = setInterval( () => {
  progressValue2++;
  valueProgress[2].textContent = `${progressValue2}%`;
  progressBar[2].style.background = `conic-gradient(
    #ff5d00 ${progressValue2 * 3.6}deg,
    white ${progressValue2 * 3.6}deg
  )`;
  if(progressValue2 == progressEndValue2){
    clearInterval(progress2);
  }
}, speed)


let progress3 = setInterval( () => {
  progressValue3++;
  valueProgress[3].textContent = `${progressValue3}%`;
  progressBar[3].style.background = `conic-gradient(
    #ff5d00 ${progressValue3 * 3.6}deg,
    white ${progressValue3 * 3.6}deg
  )`;
  if(progressValue3 == progressEndValue3){
    clearInterval(progress3);
  }
}, speed)


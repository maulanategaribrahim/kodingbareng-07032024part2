//fungsi untuk menghandel clicknya
function handleClick() {
  alert("ini diklik");
}
//queryselectorall untuk memilih semua button jika button. tetapi jika (.drum berarti button classdrum)
var drumBtn = document.querySelectorAll(".drum");
//console.log(button)

//melooping semua buttons yang ada didalamnya
for (let i = 0; i < drumBtn.length; i++) {
  //console.log(i)
  //addeventlistener digunakan untuk bertugasnya apaa, dan handleclick yang menerima
  drumBtn[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    makeSounds(btnInnerHTML)
    buttonAnimation(btnInnerHTML)
  });
}

//deteksi keyboard yang ditekan
document.addEventListener("keypress" , function(event){
    //console.log(event.key)
    makeSounds(event.key)
    buttonAnimation(event.key)
});

function makeSounds(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
  
        default:
            alert("tidak ada buttonn");
    }
}

//function animation
function buttonAnimation(key){
    //animasii ketika diklik
    let activeBtn =document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    activeBtn.classList.add("white");
  
    //remove  animiz
    setTimeout(function () {
      activeBtn.classList.remove("pressed");
      activeBtn.classList.remove("white");
    }, 100);
}



// var audio = new Audio("sounds/crash.mp3");
// audio.play();

//alert('wkekekke')

//eventlistener
// document.querySelector("button").addEventListener('click', handleTelpon)

// var button = document.querySelector("button")

// button.addEventListener('click', handleClick)

// addEventListener('menelpon' , handleClick)

// function handleClick(){
//     alert('minta jemput')
// }
// var button = document.querySelectorAll("button");

// button.addEventListener('click', handleClick);

// function handleClick() {
//     alert('minta jemput');
//}

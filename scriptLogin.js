let user = document.getElementById("username");
let pw = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let btn = document.querySelector('#btn');
let txt = document.querySelector('.txt');
    btn.addEventListener('click',function(){
      if(user.value != "" || pw.value != ""){
        if(user.value == ""){
            txt.style.color = "red";
            txt.innerHTML = `Sorry please enter your username field.`; 
        }else if(pw.value == ""){
            txt.style.color = "red";
            txt.innerHTML = `Sorry please enter your password field.`;
        }else{
            txt.style.color="green";
            txt.innerHTML=`Loging In Success.`;
        }
    }else {
        txt.style.color = "red";
        txt.innerHTML=`Fill out your information to log in.`;
    }
    })
let normalEyeStyle = () => {
  eyeL.style.cssText = "left: 0.6em; top: 0.6em;";
  eyeR.style.cssText = "right: 0.6em; top: 0.6em;";
};

let normalHandStyle = () => {
  handL.style.cssText =
    "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
  handR.style.cssText =
    "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
};

// When clicked on username input
user.addEventListener("focus", () => {
  eyeL.style.cssText = "left: 0.75em; top: 1.12em;";
  eyeR.style.cssText = "right: 0.75em; top: 1.12em;";
  normalHandStyle();
});

// When clicked on password input
pw.addEventListener("focus", () => {
  handL.style.cssText =
    "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
  handR.style.cssText =
    "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
  normalEyeStyle();
});

// When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != user && clickedElem != pw) {
    normalEyeStyle();
    normalHandStyle();
  }
});
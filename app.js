// Todo: Make M+ M- and MC functional
let modeBtn = document.querySelector(".dark-mode");
let currMode = "light"; //dark
let body = document.querySelector("body");
let string = "";
let buttons = document.querySelectorAll('.button');

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        modeBtn.style.backgroundColor="white";
        modeBtn.style.color="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode="light";
        modeBtn.style.backgroundColor="black";
        modeBtn.style.color="white";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }
    // console.log(currMode);
})


Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})
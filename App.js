// let btn = document.querySelector("button");

// btn.addEventListener("click",function (){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Color Updated");  

// })

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red} ${green} ${blue})`
//     return color;

// }

// let p = document.querySelector("p")
// p.addElementLister("click", function(){
// console.log("Paragraph was Clicked");
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("button clicked");
// });

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor  ="Green";
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });


// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let input = document.querySelector("input");
// input.addEventListener ("keydown", function(event){
//     console.log("Code =" ,event.code); //ArrowUp , //ArrowDown , ArrowLeft , ArrowRight
//     if(event.code === "keyU"){
//     console.log("character move up");
//     } else if (event.code === "keyD"){
//     console.log("character move down");
//     }else if (event.code === "keyL"){
//     console.log("character move left");
//     }else if (event.code === "keyR"){
//     console.log("character move right");
//     }
// });

// let form = document.querySelector("form");
// form .addEventListener("submit" , function(event){
//     event.preventDefault(); //prevent form from submitting normally
// //     console.dir(form);
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#password");

//     // console.log(user.value);
//     // console.log(pass.value);

//     // alert (`Hii${user.value} your password is set to ${pass.value}`);
    
// });

// let user = document.querySelector("#user")
// user.addEventListener("input" ,function (){
//     console.log("input changed");
//     console.log("final value", user.value);
// });

let int = document.querySelector("#text");
let p = document.querySelector("p");

int.addEventListener("input" ,function (){
    console.log("input changed");
    let value = int.value;
    p.innerText = value;
});
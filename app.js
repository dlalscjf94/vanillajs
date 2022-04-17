
const a = 1;
const b = 4;
let Myname = "민철";
console.log("aaaaaaa");
console.log(a+b);
console.log(a-b); 

const daysofweek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];


console.log(daysofweek[4]); 

//push <=> python append
daysofweek.push("new"); 

console.log(daysofweek);

const player = {

    name: "nico",
    points: "1212",
    fat: "true",
};

//object like python dict


console.log(player.name)
console.log(player)


//function


function sayHello(name){
    console.log("Hello, my name is " + name);
}

sayHello("aa");
sayHello("bb");
sayHello("cc");
sayHello("dd");


const calculator = {

    plus: function(a, b){
        console.log(a + b);

        return a + b;
    }, 

    minus: function(a, b){
        console.log(a - b);
        return a - b;
    },

    times: function(a, b){
        console.log(a * b);
        return a * b;
    },

    divide: function(a, b){
        console.log(a / b);
        return a / b; 
    },

    power: function(a, b){
        console.log(a ** b);
        return a ** b;     
    }

};


console.log(calculator);
console.log(calculator.plus(5,3));
console.log(calculator.power(11,3));


var age = parseInt(prompt("How old are you?"));

console.log(age);
console.log(isNaN(age));

while (1) { 
    if (isNaN(age)){ 
        var age = parseInt(prompt("How old are you?"));
    } 
    else {
        console.log(age + "!!");
        break;
    }
}

//const title = document.getElementById("title");

// title.innerText = "Got you!";


const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked"); 
    // title.style.color = "blue"; 
    title.className = "active";
}

function handleMouseEnter(){
    title.innerText  =  "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
}
//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// title.style.color = "blue";




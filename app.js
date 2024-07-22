
let input_box = document.querySelector('#amount');
let btn= document.querySelector('button');
let output = document.querySelector('.message');



// events: click, submit, keypress(keydown, keyup), 


// addEventListener:


// btn.addEventListener("click", calulateTip) // callback


function calulateTip(){
    let amount = input_box.value;
    // console.log(amount, typeof amount);
    let tip = amount * 5/100;
    // console.log(tip);
    output.innerText = "Please pay tip of ₹" + tip;
}














// console.log('Hello World!');
// let a = 10

// Selctions:

// querySelctor, querySelectorAll, 

// let heading1 = document.querySelector('h1');
//let heading1 = document.querySelectorAll('h1');


// innerText vs innerHTMl 

// heading1.innerText = 'Hello World!';

// heading1.innerHTML = '<em>Hello World!</em>';



// id and class selectors: 

// let heading1 = document.querySelector('#heading1');
// let heading1 = document.querySelectorAll('.heading1');


// multiple selectors: 
// let headin1 = document.querySelector(' div h1'); // h1 within div 


// let sec1 = document.querySelector('div');
//  let h1 = sec1.querySelector('h1');



// access elements attributes: 

// let inp = document.querySelector('input');
// console.log(inp.id)
// console.log(inp.className)
// console.log(inp.type)
// console.log(inp.placeholder)
// console.log(inp.value)
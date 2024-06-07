//selectors in dom-1-lec

//get Elements by Tagname

// var a = document.getElementsByTagName('ul');

// console.log(a)

//get element by classname()

// var a = document.getElementsByClassName('hero');

// console.log(a)

//GET ELEMENT BY ID

// var a = document.getElementById('hi')
// console.log(a)

//query selector

// var a = document.querySelectorAll('.hero')
// console.log(a)



//travel in dom 
//siblings


// console.log(document.querySelector('.good').previousElementSibling.previousElementSibling)


//appendchild

// const ul = document.querySelector('ul');
// const newE = document.createElement('li');
// newE.textContent = "sneha 122221";
// ul.appendChild(newE)

//remove some child or value

const ul = document.querySelector('li');
ul.remove()
//replace child
const list = document.querySelector('ul');
const childToChange = list.children[4];
const newLi = document.createElement('li');
newLi.textContent= "sneha qwerty";
list.replaceChild(newLi,childToChange)
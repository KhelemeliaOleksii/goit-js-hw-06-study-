// practice to use querySelector
// practice to use querySelectorAll

const listWithId = document.querySelector('#menu');
//console.log(listWithId);
     listWithId.style.textTransform = 'uppercase';
     listWithId.style.fontSize = '24px';
//console.log(listWithId);

const listWithClass = document.querySelector('.menu');
//console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
//console.log(menuItemsByTagName);

 const menuItemsByClass = document.querySelectorAll(".menu-item");
 //console.log(menuItemsByClass);

// querySelector returns first matches element 
const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
// // all objects has own methods and properties
// // for li -> textContent
// console.log(firstMenuItem.textContent);
// // for all elements classList
// console.log(firstMenuItem.classList);
// // can add, remove, check presenting, toggle class
// firstMenuItem.classList.add("red");
// console.log(firstMenuItem.classList);
// // classList has forEach method
// firstMenuItem.classList.forEach(item => console.log(item));

//style - create inline styles
//listWithClass.style.backgroundColor = "blue";
//console.log(listWithClass.style);

//attributes
//console.log(listWithClass.attributes);
//console.log(listWithClass.hasAttribute("id"));
//listWithClass.removeAttribute("id");
//console.log(listWithClass.hasAttribute("id"));
//listWithClass.removeAttribute("id");

// data-attribute
// has method dataset 
// example: data-action ->  dataset.action
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

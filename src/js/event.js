// ////////////////
// //add eventListener
// ///////////////////
// const singleBtn = document.querySelector('#single');
// //console.log(singleBtn);
// const handlerSingle = () => {
//         console.log(`It is single handler ${this}`);
// }
// singleBtn.addEventListener('click', handlerSingle);

// const multyBtn = document.querySelector('#multiple');
// //console.log(multyBtn);

// const handlerFirst = () => {
//     console.log("I'm the first");
// }
// const handlerSecond = () => {
//     console.log("I'm  the second");
// }
// const handlerThird = () => {
//     console.log("I'm  the third");
// }
// multyBtn.addEventListener('click', handlerFirst);
// multyBtn.addEventListener('click', handlerSecond);
// multyBtn.addEventListener('click', handlerThird);


// ////////////////////////
// // add and remove eventListener
// ////////////////////////
// const addListenerBtn = document.querySelector('[data-action = "add"]');
// console.log(addListenerBtn);
// const removeListenerBtn = document.querySelector('[data-action = "remove"]');
// console.log(removeListenerBtn);
// const clickMeBtn = document.querySelector('#btn');
// console.log(clickMeBtn);

// const handlerClick = () => {
//     console.log('Handler is present');
// }
// const hadlerAddBtn = () => {
//     clickMeBtn.addEventListener('click', handlerClick);
//     console.log("Handler have been added");
// }
// const handlerRemoveBtn = () => {
//     clickMeBtn.removeEventListener('click', handlerClick);
//     console.log('Handler have been removed');
// }
// addListenerBtn.addEventListener('click', hadlerAddBtn);
// removeListenerBtn.addEventListener('click', handlerRemoveBtn); 

///////////////////////////////
// callback function with this
//////////////////////////////
const mango = {
    username: "Mango",
    showUsername() {
      console.log(this);
      console.log(`My username is: ${this.username}`);
    },
  };

const btn = document.querySelector("#js-btn");
// console.log(btn);
// console.log(mango.showUsername());
// console.log(mango.showUsername);
// btn.addEventListener('click', mango.showUsername);
// btn.addEventListener('click', mango.showUsername());
btn.addEventListener('click', mango.showUsername.bind(mango));
//??????
//btn.addEventListener('click', mango.showUsername.apply(mango));
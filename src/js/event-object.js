
// const button = document.createElement('button')
// button.textContent = 'Click me'
// document.body.append(button)
// //console.log(document.querySelector('body'));
// const handleClick = (event) => {
//     console.log("event: ", event);
//     console.log("event type: ", event.type);
//     console.log("currentTarget: ", event.currentTarget);
//   };
  
//   button.addEventListener("click", handleClick);


//////////////////
// prevent standart handler
////////////////////////
const form = document.querySelector('.register-form');
const formHandler = (event) => {
    event.preventDefault();
    const {
        elements:{username, password}
    } = event.currentTarget;
    console.log(username.value, password.value);
    console.log(username, password);
}
form.addEventListener('submit', formHandler);
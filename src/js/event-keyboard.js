// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
//   });
  
//   document.addEventListener("keyup", event => {
//     console.log("Keyup: ", event);
//   });

// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
//   });


const button = document.createElement('button')
button.textContent = 'Reset'
button.dataset.action = "clear";
button.style.color = 'blue';
button.style.backgroundColor = 'red';
document.body.append(button)

const div = document.createElement('div');
div.classList.add('log-list');
document.body.append(div);

const clearLogBtn = document.querySelector('[data-action = "clear"]');
//console.log(clearLogBtn);
const logList = document.querySelector('.log-list');
//console.log(logList);

let keyPressCounter = 1;

function logMessage({type, key, code}) {
    const markup = `<div class="log-item">
    <span class="chip">${keyPressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;
  logList.insertAdjacentHTML('afterbegin', markup);
  if (type === "keyup") {
    incrementKeypressCounter();
  }
}
function reset() {
    keyPressCounter = 1;
    logList.innerHTML = "";
}
  
function incrementKeypressCounter() {
    keyPressCounter += 1;
}
document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);

document.addEventListener("keydown", event => {
    event.preventDefault();
  
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
      console.log("«Ctrl + s» or «Command + s» combo");
    }
  });
const heading = document.createElement("h1");
//console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// ADD element to html 

const bodyEl = document.querySelector('body');
console.log(bodyEl);
bodyEl.prepend(heading);
bodyEl.append(image);
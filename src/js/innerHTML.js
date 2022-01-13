// const firstItem = document.querySelector(".menu .first-item");
// console.log(firstItem);
// console.log(firstItem.innerHTML);
// const secondItem = document.querySelector(".menu .second-item");
// console.log(secondItem.textContent);

///////////////////////////////
// add element with innerHTML//
///////////////////////////////
// element.innerHTML method rewrites content of element
// it generally is used with empty element or element need fully change
// firstItem.innerHTML = 'Hello <span class="accent">improved</span>'

// const listTechnology = document.createElement('ul');
// //console.log(listTechnology);
// listTechnology.classList.add('list');

// const body = document.querySelector('body');
// body.append(listTechnology);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// //console.log(list);

// const markupList = technologies
//         .map((technology)=> `<li class="list-item"> ${technology} </li>`).join(" ");

// // const markup = technologies
// //   .map((technology) => `<li class="list-item">${technology}</li>`)
// //   .join("");

// // // // Check the console, you'll see a single string with HTML tags
//  console.log(markupList);

// // // Adding all the markup in one operation
// list.innerHTML = markupList;
///////////////////////////
// insertAdjacent//////////
///////////////////////////
const list = document.querySelector(".list-technology");
const newTechnologies = ["React", "TypeScript", "Node.js"];

const markupListTechnologies = newTechnologies
        .map((technology) => `<li class = "list-technology__item"> ${technology} </li>`)
        .join('');
list.insertAdjacentHTML('beforeend', markupListTechnologies);
// list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
console.log(list);


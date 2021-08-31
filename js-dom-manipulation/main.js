const body = document.body;
// body.appendChild("Hi Axelerant"); // will give an error
// body.append("Hi Axelerant","I'm Subhasish Nath");

const div = document.createElement("div");
// div.innerText = "Dynamic content inside div";
// div.textContent = "Dynamic content inside div";

// diff between innerText and textContent:
// textContent will display all spaces and indentation.
// innerText will only display the text.

// Limktation: innerText and textContent both can't take HTML tags.

// innerHTML is less secure.
div.innerHTML = `<h2>Hi everyone, good morning.</h2>`;

body.append(div);

// selecting from DOM.
const section = document.querySelector('section');
const span1 = document.querySelector("#hi");
const span2 = document.querySelector("#bye");

// remove an element from DOM.
// span2.remove();
// section.removeChild(span2);

// accessing and changing different attributes
// getter
console.log(span1.getAttribute('title'));
// setter
span1.setAttribute('title','new value for title');
// removing attribute.
span1.removeAttribute('title');


// using dataset attribute to list all of the data attributes for current element.
console.log(span1.dataset);
// getting data attribute's value
document.write(span1.dataset.test);
document.write('<br/>');
document.write(span1.dataset.spanName);

// using classList property.
span2.classList.add('newspan2class');

// remove class.
span2.classList.remove('newspan2class');

// toggle class.
span2.classList.toggle('newspan2class');

// using style property.
span2.style.backgroundColor = '#ff0000';
span2.style.padding = '20px';




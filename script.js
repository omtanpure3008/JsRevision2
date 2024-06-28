// Dom Manipulation

/*
    1. querySelector()
    2. querySelectorAll()
    3. getElementById()
    4. getElementByClassName()
    5. getElementByTagName()
*/


// change content

/*
    1.innerHTML
    2.innerText
    3.textContent
*/


const heading = document.querySelector('.wrapper h1');
console.log(heading);

const image = document.querySelector('.wrapper img');
console.log(image);

image.removeAttribute('src');


// heading.setAttribute('class', 'design');

// heading.setAttribute('id', 'design');

// heading.removeAttribute('id', 'design');

let heading_id = heading.getAttribute('class');
console.log(heading_id);

let img_src = image.getAttribute('src');
document.write(img_src);




// let write_Content = '<h1>Hello from writing</h1>';

// document.write(write_Content);





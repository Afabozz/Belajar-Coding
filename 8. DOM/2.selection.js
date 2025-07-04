// DOM Selection
// => document.getElementById() --> element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Abdullah Kafabihi'

// => document.getElementByTagName() -> HTMLCollections
// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// => document.getElementByClassName() --> HTMLCollection
// const p1 = document.getElementsByClassName('p');
// p1[0].innerHTML = 'Ini diubah dari javascript';

// => document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b  ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';

// => document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }




// contoh
// // const p4 = document.getElementsByTagName('p');
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';


// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';

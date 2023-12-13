// let btn = document.querySelectorAll(".btn")
// let btns = document.getElementById("dl")
// console.log("hello",btn);
// btns.innerText = "hekko";

//  for(let i = 0; i < btn.length; i++){
//     console.log("hello",btn[i]);
//     btn[i].addEventListener('click', function() {

//       // loop your button again to remove all "active"
//       for(let j = 0; j < btn.length; j++){
//         btn[j].classList.remove("active");
//       }
//       // add active class to your clicked button
//       btn[i].classList.add("active");
//     });

//  }

// Remove falsy value from any array

// let hello =['Apple',false,'orange',NaN,'banana',null,'chilli',undefined,'hello'];
// let fruits = hello.filter(Boolean);
// console.log(fruits);

// let animals =['cat','tiger','lion','dog']
// animals.length = 2;
// console.log(animals)

// const quote = "i am mohammad ali"
// console.log(quote.replace(/ali/g, "SHuvo"))

//  const btn = document.querySelectorAll(".btn")
// console.log("hello",btn);

// for(let i = 0; i < btn.length; i++){
//   console.log("he",btn[i]);
//     btn[i].addEventListener('mouseover', function() {
//       btn[i].classList.add("active");

//       for (let j =0; j < btn.length; j++){
//         btn[i].addEventListener('mouseout', function() {
//           btn[i].classList.remove("active");

//       });

//       }

//     });

//   }

// const btn = document.querySelectorAll(".btn")
// console.log("hello",btn);

//     console.log("hello");
//     btn.addEventListener('submit', function() {

//     });

// const textFild = document.querySelector(".text");
// console.log(textFild);
// textFild.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         const result = document.querySelector('.result');
//         result.textContent = `output = ${event.target.value}`;
//         console.log(event.target.value)
//     }

// });
// const textFild = document.querySelector(".text");
// const textWord = document.querySelector(".result");
// const textChar = document.querySelector(".result2");

//     const countChar = (str) => {
//         return typeof (str) ==="string" && str.trim().length
//     }
//     const countWord = (str) => {
//         console.log(str.trim())
//         return typeof (str) ==="string" && str.trim().split(/\s+/).filter(st => st !="").length
//     }
//     textFild.addEventListener("input", () =>{

//          textWord.innerHTML = countWord(textFild.value);
//          textChar.innerHTML = countChar(textFild.value);
//     })

// let createCounter = function(n) {
//   let count = n;
//   return function() {
//       count++;
//       return count-1;

//   };
// };

// const counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12
// console.log("llll",counter())
// console.log("llll",counter())
// console.log("llll",counter())

// (() => {
//   const SUBMIT_URL =
//     'https://www.greatfrontend.com/api/questions/contact-form';

//   const $form = document.querySelector('form');
//   $form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     if ($form.action !== SUBMIT_URL) {
//       alert('Incorrect form action value');
//       return;
//     }

//     if ($form.method.toLowerCase() !== 'post') {
//       alert('Incorrect form method value');
//       return;
//     }

//     try {
//       const formData = new FormData($form);
//       const response = await fetch(SUBMIT_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.get('name'),
//           email: formData.get('email'),
//           message: formData.get('message'),
//         }),
//       });

//       const text = await response.text();
//       alert(text);
//     } catch (_) {
//       alert('Error submitting form!');
//     }
//   });
// })();
let items = document.querySelectorAll("li");

let searchInput = document.querySelector(".search-list");
const filterSearch = () =>{
  items.forEach(item => {
    if(item.textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
      item.classList.remove("hide");
    } else {
      item.classList.add("hide")
    }
  });
}

searchInput.addEventListener('keyup',(e)=>{
  let inputValue = e.target.value;
  console.log(inputValue)
  filterSearch()
 
})

console.log("hello", searchInput);


// import './App.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Student2 from './Student2'





// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   show() {
//     return `Name : ${this.name}, Age : ${this.age}`;
//   }
// }

// function App() {
//   const obj = new Student("Shahab", 21);

//   class Student1 extends Student {
//     constructor(name, age, email) {
//       super(name, age);
//       this.email = email;
//     }
//     show1() {
//       return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
//     }
//   }

//   const obj1 = new Student1("Fardeen", 21, "SF@email.com");

//   return (
//     <>
//       <h1>Welcome in React class</h1>
//       <h1>Sum of two num is : 0</h1>
//       <p>The value of the student class method is {obj.show()}</p>
//       <p>The value of the Student1 class method is {obj1.show1()}</p>
//     </>
//   )
// }

// export default App


// DAY - 2



// function App() {
//   class ABC{
//     static show(){
//       return "The content of class ABC"
//     }
//     static sum(a,b){
//       return a+b;
//     }
//   }
//   class XYZ extends ABC{
//     static show1(){
//       return super.show()
//     }
//   }
// let obj = new XYZ()
// let square = (x) => x*x;
// let cube = (y) => y*y*y;
// let sum = (a,b) => a+b;
// let sub = (a,b) => a-b;
// let mul = (a,b) => a*b;
// let div = (a,b) => a/b;
// let mdiv = (a,b) => a%b;

//   return (
//     <>
//       {/* <p>{obj.show()}</p>
//       <p>{obj.show1()}</p>
//       <p>ABC.sum(12,13)</p> */}
//       <p>result sum:{sum(12,45)}</p>
//       <p>result sub:{sub(12,45)}</p>
//       <p>result mul:{mul(12,45)}</p>
//       <p>result div:{div(12,45)}</p>
//       <p>result mdiv:{mdiv(12,45)}</p>
//       <p>result square:{square(12)}</p>
//       <p>result cube:{cube(45)}</p>

//     </>
//   )
// }


// export default App

// const App = () => {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const odd = arr.filter(num => num % 2 !== 0);
//   const even = arr.filter(num => num % 2 === 0);

//   return (
//     <>
//       <h2>Odd Numbers: {odd.join(' ')}</h2>
//       <h2>Even Numbers: {even.join(' ')}</h2>
//     </>
//   );
// }

// contains freinds name and display using arrow function
// display content of the list

function App() {
  // const marks = [12,15,27,17,10];
  // const result = marks.every((y) => y <= 10);
  // return (
  //     <>
  //     <p>The value of result: {result.toString()}</p>
  //     </>
  // )

  // const students = [
  //     { id: 1, name: "shahab", age: 21 },
  //     { id: 2, name: "Fardeen", age: 10 },
  //     { id: 3, name: "Bentley", age: 25 },
  //     { id: 3, name: "parker", age: 2 }
  // ];

  // // find all students younger than 21
  // const result = students.filter(std => std.age < 21);
  // const num = [2,4,6,8,10,20,30];
  // num.forEach(n => {
  //     console.log(n);
  // });
  // const letters = Array.from("Shahab Fardeen")
  // return (
  //     <>
  //        {
  //         letters.map((ch, i) => (
  //             <p key={i}>{ch}</p>
  //         ))
  //        }
  //     </>
  // );
  // const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  // return (
  //     <>
  //         <h3>Numbers 1 - 10</h3>
  //         {numbers.map(num => (
  //             <p key={num}>key {num} Math.sqrt({num}) = {Math.sqrt(num)}</p>
  //         ))}
  //     </>
  // );

  // const num = [2,4,5,6,5,10,2,0,5,0,1,3,7,80,7];
  // const uniq = Array.from(new Set(num));
  // const name = ['shahab','shahab','Fardeen',]
  // const uniq = Array.from(new Set(name))
  // return (
  //   <>
  //     <h3>Unique numbers:</h3>
  //     <p>{uniq.join(' ')}</p>
  //   </>
  // );


  // const name = ["Shahab", "Fardeen", "LPU"];
  // const letter = ["A","B","C","D","E"]
  // const digits = [23,25,21,56,27]
  // const newDigit = [5,7]
  // const sum = [...newDigit,...digits]
  // const fruits = ["apple", "banana", "cherry", "mango"];
  // const [first, , , fourth] = fruits
  // const [first,...rest] = fruits;

  // return (
  //   <>  
  //     {/* /* <p>The outcomes of digits are: {digits.join("|")}</p> */ }
  //     {/* <p>{sum.join(" ")}</p> */}
  //     <p>{first}</p>
  //     <p>{rest.join(" ")}</p>
  //   </>
  // )


  //  const arr = [23,25,21,56,27]
  //  const first = arr[0];
  //  const middle = arr.slice(1,-1);
  //  const last = arr.slice(-1)[0]; 


  const student1 = {
    name: "Shahab Fardeen",
    reg: 12309964
  };
  return (
    <>
      <Student2 temp1={student1}> </Student2>
    </>
  )
}
   

export default App



// person.greet();
//using Arrays
// const hobbies = ['sports', 'cooking'];
// // // for (let hobby of hobbies){
// // //     console.log(hobby);
// // // }
// // console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// // console.log(hobbies);
// // hobbies.push('Programming');
// // console.log(hobbies);
// //Spread and Rest Operators
// //spread operator (...)
// const copiedArray = [...hobbies];
// console.log(copiedArray);
// const toArray = (...args) => {
//     return args;;
// };
// console.log(toArray(1, 2, 3, 4));
//Destructuring
// const printName = ({name}) => {
//     console.log(name);
// }
// printName(person);
// const { name, age } = person;
// console.log(name, age);
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);
//Async Code, things that do not happen immediately.
// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//      setTimeout(() => {
//         resolve('Done!');
//      }, 1500);
//     });
//     return promise;
// }
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text)
//     });
// }, 2000);
// const name = 'Cody';
// const age =  33;
// console.log(`My name is ${name} and I am ${age} years old.`);
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 0) {
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

//JS refresher
//basic var usage.  Notice i do not need to explicitly say if I'm using a 'string', int, or bool variable.
//var name = "Cody";
//var age = 29;
//var hasHobbies = true;

//function summarizeUser(userName, userAge, userHasHobby){
//    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
//}

//console.log(summarizeUser(name, age, hasHobbies));

//utilizing 'let' instead of var.  you are able to change the let variable.
//let nameTwo = 'Max';
//let ageTwo = 30;
//let hasTwoHobbies = true;

//utilizing const variables.  Unable to change this variable. Will get an error if try changing these below variables down the road.
//const nameThree = 'Travis';
//const ageThree = 27;
//const hasThreeHobbies = false;

//utilizing Arrow functions.  if only 1 statement in the function, you can omit the curley brackets and the 'return' statement, and just write as below.
//const add = (a, b) => a + b;

//console.log(add(1, 2));

//if 1 argument only, you can remove parenthesis from that argument as demonstrated below.
//const addOne = a => a + 1;

//console.log(addOne(1));

//if no arguments, must have parenthesis.
//const addRandom = () => 1 + 2;
//console.log(addRandom());


//working with Objects, Properties & Methods
// const person = {
//     name: 'Cody', 
//     age: 33,
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// };

function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 0) {
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

var N = 3;

towerOfHanoi(N, 'A', 'C', 'B');


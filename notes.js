// var user2 = {
//   username: "Zebra"
// }

// console.log(user.getUserName.call(user2))

// function Car (make,model,year) {
//   //Code Here 
   
//     this.make = make;
//     this.model = model;
//     this.year = year;
   
// }

// var prius = new Car('Toyota', 'Prius', 2011);
// var integra = new Car('Honda',"integra", '2001');
// console.log(integra);
// console.log(prius);

// function Car (make,model,year, moveCar) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.move = 0;
//     this.moveCar = function(){
//       return this.move +=10;
//     }
// }

// var prius = new Car('Toyota', 'Prius', 2011);
// var integra = new Car('Honda',"integra", '2001');
// prius.moveCar();
// integra.make;
// console.log(integra);
//---------------------------------------------------
// var user = {
//     username: 'iliketurtles',
//     age: 13,
//     email: 'iliketurtles@gmail.com'
// };

// var getUsername = function(user){
//   return this.username; 
// }


// var finalUsername = getUsername.call(user);
// console.log(finalUsername);
//-----------------------------------------------------


// function Car(make, model, year){
//   	this.make = make,
//     this.model = model,
//     this.year = year
// }

// var prius = new Car('Toyota', 'Prius', 2011);
// console.log(prius);
// -----------------------------------------------------
// var user1 = {
//     username: 'BillyBob',
//     age: 19,
//     email: 'billybob21@gmail.com'

// };

// getUsername = function(){
//     return this.username;
// }

// var getUser = getUsername.call(user1); 
// console.log(getUser);
//-----------------------------------------------------
// var user1 = {
//     username: 'BillyBob',
//     age: 19,
//     email: 'billybob21@gmail.com'


// };
// var user2 = {
//     username: 'iliketurtles',
//     age: 13,
//     email: 'iliketurtles@gmail.com'


// };

// getUsername = function(){
//     return this.username;
// }


// var getUser1 = getUsername.call(user1);// Code Here
// var getUser2 = getUsername.call(user2);// Code Here
//-----------------------------------------------------

// var obj = {num:5};
// var nums = [1,2,3];

// function addThis(a,b,c) {
//     return this.num + a + b + c;
// }
// var result = addThis.apply(obj, nums); 
// console.log(result);
//-----------------------------------------------------


// var myName = function() {
//   return this.name;
// }

// var chris = {
//     name: 'chris',
//     age: 36
// }

// var sayName = myName.call(chris);
// console.log(sayName);


// var user = {
//     username: "str",
//     email: "email",
//     getUsername:function(){
//         return this.email;
//     }
// }

// //Now, invoke the getUsername method and verify you got the username of the object and not anything else.

// console.log(user.getUsername());

// function Car (make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.move = 0;
//     this.moveCar = function(){
//         this.moveCar += 10;
//         return this.move;
//     }
// }
//   //Function Invocations Here

// var prius = new Car('Toyota', 'Prius', 2011);
// var mustang = new Car('Ford', 'Mustang', 2013);

// prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
// mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

// var user = {
//     username: 'iliketurtles',
//     age: 13,
//     email: 'iliketurtles@gmail.com'
// };

// var getUsername = function(user){
//   return this.username; 
// }


// var finalUsername = getUsername.call(user);
// console.log(finalUsername); 


//var myUser = {
// username: 'iliketurtles',
// age: 13,
// email: 'iliketurtles@gmail.com'
//};
//
//var getMyUsername = function() {
// return this.username;
//};
//
//var userName = getMyUsername.call(myUser);
//console.log(userName);






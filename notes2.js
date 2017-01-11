// function person(name, age, mood){
//   this.name = name;
//   this.age = age;
//   this.mood = mood;
// }

// person.prototype.sayName = function(){
//   console.log(this.name);
// }
// //this function is attached to every person created

// var me = new person('Juan','22','frustrared');
// me.sayName();

// var you = new person('Pablo', '20', 'working');
// you.sayName();



// Array.prototype.first = function(){
//   return this[0];
// }

// var test = [1,2,3];
// test.first();


//example prototypes that toUpperCase first letter
// String.prototype.title = function(){
//   var arr = this.split(" ");
//   var titled = [];
//   for(var i = 0; i < arr.length; i ++){
//     var cap = arr[i][0].toUpperCase();
//     titled.push(cap + arr[i].slice(1));
//   }
//   return titled.join(" ");
// }
// var test = 'hello buddy';
// test.title();

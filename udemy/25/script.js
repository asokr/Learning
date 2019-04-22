window.addEventListener('DOMContentLoaded', function(){
    let age = document.getElementById('age');
    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    let fullUser = showUser.bind(age);
    fullUser('Smith', 'Jonh');
});



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользовтель ' + this.name + ' ушёл');
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

//     console.log(ivan);
//     console.log(alex);

//     ivan.exit();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this.a + this.b);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }

// obj.sum();

// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Snow']));

// function count(number) {
//     return this* number;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));
"use strict";

//  ---------------------- map() && forEach()  ----------------------
var numbs = [1, 2, 3, 4, 5];
numbs.forEach(function (item, index) {
  console.log("O item \xE9 ".concat(item, ", de index ").concat(index));
});
var newNumbs = numbs.map(function (item) {
  return item + 1;
});
console.log(newNumbs); //  ---------------------- reduce() ----------------------

var numbers = [1, 2, 3, 4, 5];
var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total); //  ---------------------- filter() && find() ----------------------

var todos = [{
  text: 'Lavar a pia',
  done: false
}, {
  text: 'Estender a roupa',
  done: true
}, {
  text: 'Passar a roupa',
  done: true
}];
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos);
var findTodo = todos.find(function (todo) {
  return todo.text === 'Passar a roupa';
});
console.log(findTodo); //  ---------------------- findIndex() ----------------------

var index = todos.findIndex(function (todo) {
  return todo.text === 'Passar a roupa';
});
console.log(index); //  ---------------------- some() ----------------------

var cars = ['fusca', 'civic', 'hb20'];
var hasFusca = cars.some(function (car) {
  return car === 'fusca';
});
console.log(hasFusca); // ---------------------- arrow function ----------------------

var task = [{
  text: 'Vender doces',
  done: false
}, {
  text: 'Lavar a louça',
  done: true
}, {
  text: 'Pasear com o cachorro',
  done: true
}];
var filterTodos = task.filter(function (todo) {
  return todo.done;
});
console.log(filterTodos);

var anything = function anything() {
  return {
    name: 'Eduardo',
    idade: 17
  };
};

console.log(anything()); // ---------------------- Parâmetro padrão ----------------------

var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Fulano';
  return console.log('Olá ' + name);
};

sayHello(); // ---------------------- Object Short Syntax ----------------------

var name = 'Camisa';
var price = 50;
var product = {
  name: name,
  price: price,
  inStock: true
};
console.log(product); // ---------------------- Desestruturação (arrays e objetos) ----------------------

var fruits = ['Banana', 'Maça', 'Uva'];
var b = fruits[0],
    u = fruits[2];
console.log(b, u);
var person = {
  firstName: 'Edaurdo',
  secondName: 'Moraes',
  age: 17,
  address: {
    city: 'Goiabal',
    region: 'MG'
  }
};
var firstName = person.firstName,
    secondName = person.secondName,
    city = person.address.city;
console.log(firstName, secondName, city); // função com desestruturação

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      secondName = _ref.secondName;
  console.log("".concat(firstName, " ").concat(secondName));
};

showFullName(person);

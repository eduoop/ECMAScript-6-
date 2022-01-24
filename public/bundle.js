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
console.log(hasFusca);

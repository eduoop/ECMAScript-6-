"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

showFullName(person); // ---------------------- Operadores rest ----------------------

var numms = [1, 2, 3, 4, 5];
var first = numms[0],
    second = numms[1],
    rest = numms.slice(2);
console.log(rest);
var pessoa = {
  nome: 'Eduardo',
  segundoNome: 'Moraes',
  idade: 17,
  trabalho: true
};

var nome = pessoa.nome,
    resto = _objectWithoutProperties(pessoa, ["nome"]);

console.log(resto);

var sum = function sum() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (all, proxima) {
    return all + proxima;
  });
};

console.log(sum(4, 5, 6, 7, 1)); // spread

var allnumbs1 = [1, 2, 3, 4];
var allnumbs2 = [5, 6, 7, 8];
var allnumbs = [].concat(allnumbs1, allnumbs2);
console.log(allnumbs);
var pessoa2 = {
  nome2: 'Eduardo',
  segundoNome2: 'Moraes',
  idade2: 17,
  trabalho2: true
};

var pessoa3 = _objectSpread(_objectSpread({}, pessoa2), {}, {
  trabalho2: false
});

console.log(pessoa3);

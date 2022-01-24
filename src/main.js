//  ---------------------- map() && forEach()  ----------------------

const numbs = [1, 2, 3, 4, 5]

numbs.forEach((item, index) => {
    console.log(`O item é ${item}, de index ${index}`)
})

const newNumbs = numbs.map((item) => {
    return item + 1
})

console.log(newNumbs)
//  ---------------------- reduce() ----------------------

const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce((total, next) => {
    return total + next
})

console.log(total)


//  ---------------------- filter() && find() ----------------------
const todos = [
    { text: 'Lavar a pia', done: false },
    { text: 'Estender a roupa', done: true },
    { text: 'Passar a roupa', done: true }
]

const doneTodos = todos.filter((todo) => {
    return todo.done
})

console.log(doneTodos)

const findTodo = todos.find((todo) => {
    return todo.text === 'Passar a roupa'
})

console.log(findTodo)

//  ---------------------- findIndex() ----------------------

const index = todos.findIndex((todo) => {
    return todo.text === 'Passar a roupa'
})

console.log(index)

//  ---------------------- some() ----------------------

const cars = ['fusca', 'civic', 'hb20']

const hasFusca = cars.some((car) => {
    return car === 'fusca'
})

console.log(hasFusca)

// ---------------------- arrow function ----------------------

const task = [
    { text: 'Vender doces', done: false },
    { text: 'Lavar a louça', done: true },
    { text: 'Pasear com o cachorro', done: true }
]

const filterTodos = task.filter((todo) => todo.done) 

console.log(filterTodos)

const anything = () => ({name: 'Eduardo', idade: 17})

console.log(anything())

// ---------------------- Parâmetro padrão ----------------------

const sayHello = (name = 'Fulano') => console.log('Olá ' + name);

sayHello()

// ---------------------- Object Short Syntax ----------------------

const name = 'Camisa'
const price = 50

const product = {
    name,
    price,
    inStock: true
}

console.log(product)

// ---------------------- Desestruturação (arrays e objetos) ----------------------

const fruits = ['Banana', 'Maça', 'Uva']

const [b, , u] = fruits

console.log(b, u)


const person = {
    firstName: 'Edaurdo',
    secondName: 'Moraes',
    age: 17,
    address: {
        city: 'Goiabal',
        region: 'MG'
    },
}

const { firstName, secondName, address: { city } } = person

console.log(firstName, secondName, city)


// função com desestruturação
const showFullName = ({ firstName, secondName }) => {
    console.log(`${firstName} ${secondName}`)
}

showFullName(person)

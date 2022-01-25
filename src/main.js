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

// ---------------------- Operadores rest ----------------------

const numms = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numms

console.log(rest)


const pessoa = {
    nome: 'Eduardo',
    segundoNome: 'Moraes',
    idade: 17, 
    trabalho: true
}

const { nome, ...resto } = pessoa
console.log( resto )


const sum = (...parametros) => {
    return parametros.reduce((all, proxima) => all + proxima)
}

console.log(sum(4, 5, 6, 7, 1))

// spread

const allnumbs1 = [1, 2, 3, 4] 
const allnumbs2 = [5, 6, 7, 8] 

const allnumbs = [...allnumbs1, ...allnumbs2]

console.log(allnumbs)

const pessoa2 = {
    nome2: 'Eduardo',
    segundoNome2: 'Moraes',
    idade2: 17, 
    trabalho2: true
}
const pessoa3 = {
    ...pessoa2,
    trabalho2: false
}

console.log(pessoa3)




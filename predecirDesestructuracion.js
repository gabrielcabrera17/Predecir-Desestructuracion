//Prediciendo desustructuración
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//obtener el primer elemento del arreglo por medio de la variable randomCar = tesla
// ,otherRandomCar indica con la coma que se esta saltando el primer elemento
//por ende, obtiene el segundo elemento que seria = Mercedes
console.log(randomCar)
console.log(otherRandomCar)

//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Obtendremos la primera clave del objeto que es el nombre
//pero con una variable distinta en este caso otherName
//arrojara error ya que name no esta definida, pero si eliminamos esa linea si imprime otherName que es la nueva variable
//Los ':' indica que asignaremos el valor de la variable name a un nuevo elemento en este caso otherName
console.log(name);
console.log(otherName);

//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//password imprimira su valor 12345
//hashedPassword imprimira undefined, ya que fue asignado durante
// la desustructuracion de password, pero como esta propiedad no existe en el objeto person imprimira undefined
console.log(password);
console.log(hashedPassword);

//problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; ///5
const [,,,,,,,,third] = numbers; //2
//false
// true 2 ==2
console.log(first == second);
console.log(first == third);

// problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest;// [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //5
//value
//  [1, 5, 1, 8, 3, 3]
// 1
// 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);






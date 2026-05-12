

const doble = n => n * 2
console.log([1, 2, 3, 4, 5].map(doble))

// lo que map hace por dentro

const nums = [1, 2, 3, 4, 5]

console.log(nums.map(n => n * 2))
console.log(nums.filter(n => n > 2))
console.log(nums.reduce((acc, n) => acc + n, 0))
console.log(nums.find(n => n > 3))

const user = { nombre: "Luis", edad: 20, ciudad: "Medellín" }
const { nombre, edad, ciudad } = user
console.log(nombre, edad, ciudad)

const coords = [4.624, -74.063]
const [lat, lng] = coords
console.log(lat, lng)

const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]
console.log(c)

const { nombre: nom, ...resto } = user
console.log(resto)

// actualizar un campo de un objeto sin perder los demás
const saludo = `Hola ${nombre}, bienvenido a Medellín`
console.log(saludo)

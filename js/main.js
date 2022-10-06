
function questionOne() {
    let year = prompt("en que año naciste?")
    for (let age = 1850; age < 1870; age++) {
        console.log(age);
        if (age == year) {
            alert("tienes un descuento de 30%  en el dia de hoy en cualquiera de nuestras sesiones")
        }

    }
}
questionOne()
alert("el total de una sesion es $300.000")

function dividir(a, b) {
    let proceso = a / b
    console.log(proceso)
    return proceso
}
const salida = dividir(3000000, 40)
alert("en los proximos 4 meses puedes pagar solo $" + salida + " por mes")


const a = ["Ana", "Anue", 'Veronica', ' Manuel', 'Pedro', 'Simon', 'Camila', 'Laura', 'Sofia', 'Luis']
let miVar1 = a.join();
alert(" Si tu nombre Aparece en esta lista tiene 30% de descuento : " + miVar1)


let mensaje = "Bienvenidos a mi pagina web amigos";
alert(mensaje.split(' ', 4))


alert("ESTAS LISTO PARA VER LAS MEJORES FOTOGRAFIAS")
const numbers = [1, 2, 3, 4, 5]
const reversed = numbers.reverse();
alert(reversed)




let ingresarNombre = prompt('cual es tu nombre?');

function Cliente(nombre) {
    this.nombre = nombre;

    this.saludar = function () {
        alert('Bienvenido ' + nombre)
    }
}
let client1 = new Cliente(ingresarNombre);
client1.saludar();
console.log(client1)




const informacion = [
    { nombre: 'Maria', tipo: " matrimonio" },
    { nombre: 'Luisa', tipo: " graduacion" },
    { nombre: 'Julian', tipo: "graduacion" },
    { nombre: 'Paula', tipo: "cumpleaños" },
]
const resultado = informacion.find(producto => producto.nombre === "Maria")
console.log(resultado) ////////// necesitaba saber que tipo de servicio solicito Maria


const precio = [
    { nombre: 'Maria', precio: 500000 },
    { nombre: 'Luisa', precio: 450000 },
    { nombre: 'Julian', precio: 450000 },
    { nombre: 'Paula', precio: 300000 },
]
let resultado1 = precio.filter(producto => producto.precio > 350000)
console.log(resultado1)//////// necesitaba saber las personas que consumen mas

const nombres = ["Juliana", 'Carolia', ' Tatiana', 'Simon', 'Carlos', ' Vanesa']
const resultado2 = nombres.includes('Sofia')
console.log(resultado2)//////// necesitaba saber si Sofia hacia parte de la lista

const afiliados = [
    { nombre: "Colegio San Jose", duracion: "tres años" },
    { nombre: "Universidad Santo Tomas", duracion: "dos años " },
    { nombre: "Universidad La Salle", duracion: "dos año" },
    { nombre: "Colegio San Bernardo", duracion: "uno años " },
    { nombre: "Colegio Las Hermanas", duracion: "seis meses" }
]
afiliados.pop()
console.log(afiliados)////// descartare al de menos meses 

const mesesTrabajar = ['enero', 'febrero', 'marzo', ' abril', 'mayo', ' junio', ' julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
mesesTrabajar.splice(1, 2,)
console.log(mesesTrabajar)///////// necesitaba sacar los meses de baja temporada

function Propietarios(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;


    this.saludar = function () {
        console.log('hola soy ' + nombre + ' tengo ' + edad + ' años y  mi telefono es ' + telefono);
    }
}
let propietario1 = new Propietarios(' Maria', 23, 7207450125);
let propietario2 = new Propietarios('Viviana', 30, 3154256589);
console.log(propietario1)
console.log(propietario2)
propietario1.saludar();
propietario2.saludar();/////////////////////////////////// necesitaba saber info de los propietarios

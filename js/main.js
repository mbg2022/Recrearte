//Inicio desafío complementario Entrega 1-6
/*
alert("La idea es que ingreses un  número PRINCIPAL P , y otro número NÚMERO N yo te digo si el PRINCIPAL es divisible o no por ese NÚMERO");
alert("Poder repetirlo la cantidad de veces que me digas");
let nombre = prompt("Ingresá tu nombre:");
alert("Hola" + " " + nombre);

let principal = +prompt("Ingresa un número: ");
let cantidadVeces = +prompt("Ingresá la cantidad de veces que quieres consultar");

let divisor = +prompt("Ingresa el divisor: ");



if (Number(cantidadVeces)) {

    if (cantidadVeces === 0) {
        alert(nombre + " ,estás seguro que no querés consultar ? ");
    }
    if (cantidadVeces === "") {
        alert(nombre + " ,tenes que ingresar un valor numérico ? ");
    }
    if (cantidadVeces < 0) {
        alert(nombre + " ,debés ingresar un número mayor a 0 ");
    } else {

        for (i = 1; i <= cantidadVeces; i++) {

            if ((principal % divisor) == 0) {
                alert("Genial!!! el número " + principal + " es divisible por " + divisor);

            } else {
                alert("Alpiste perdiste, el número " + principal + " NO es divisible por " + divisor);
                exit;

            }
            if (i != cantidadVeces) {
                divisor = +prompt("Ingresa el divisor: ");
            }

        }
    }
} else {
    alert(nombre + "El valor ingresado debe ser numérico");

}
*/
//Fin de desafío complementario 1-6

//Inicio Desafío Entrega 6-6
/*La idea es preguntarle al usuario la cantidad de horas que requiere una niñera, y que seleccione la niñera que quiere. Con esa información se le devuelve el Importe que deberá abonar de acuerdo a la niñera seleccionada*/

/*Inicio Desafío 6
class Ninieras {
    constructor(nombreNiniera, valorHora) {
        this.nombreNiniera = nombreNiniera
        this.valorHora = valorHora
    }
    calcularValorCuidado(nombreNiniera, precio, cantidadHoras) {
        alert("El valor del cuidado de " + ninieraSeleccionada + " por " + cantidadHoras + " horas " + "es de $" + (this.valorHora * cantidadHoras))
    }
}
const niniera1 = new Ninieras("Mariana", 450)
const niniera2 = new Ninieras("Sol", 650)
const niniera3 = new Ninieras("Erica", 500)
const niniera4 = new Ninieras("Paula", 550)
const niniera5 = new Ninieras("Julieta", 450)

let cantidadHoras = +(prompt("Ingrese la cantidad de horas de cuidado que requiere"))
while ((!Number(cantidadHoras))) {
    alert("La cantidad de horas debe ser un valor numérico"), +(prompt("Ingrese la cantidad de horas de cuidado que requiere"))

}
let ninieraSeleccionada = (prompt("Escriba el nombre de la niñera que quiere contratar, teniendo en cuenta que las niñeras disponibles en el catálogo son: Mariana, Sol, Erica, Paula, Julieta"))



switch (ninieraSeleccionada) {
    case "Mariana":
        ninieraSeleccionada = niniera1.nombreNiniera;
        niniera1.calcularValorCuidado(ninieraSeleccionada, niniera1.valorHora, cantidadHoras);
        break;
    case "Sol":
        ninieraSeleccionada = niniera2.nombreNiniera;
        niniera2.calcularValorCuidado(ninieraSeleccionada, niniera2.valorHora, cantidadHoras);
        break;
    case "Erica":
        ninieraSeleccionada = niniera3.nombreNiniera;
        niniera3.calcularValorCuidado(ninieraSeleccionada, niniera3.valorHora, cantidadHoras);
        break;
    case "Paula":
        ninieraSeleccionada = niniera4.nombreNiniera;
        niniera4.calcularValorCuidado(ninieraSeleccionada, niniera4.valorHora, cantidadHoras);
        break;
    case "Julieta":
        ninieraSeleccionada = niniera5.nombreNiniera;
        niniera5.calcularValorCuidado(ninieraSeleccionada, niniera5.valorHora, cantidadHoras);
        break;
    default:
        break;


}
Fin desafío 6*/

/*Desafío complementario incorporar array entrega 15-6 */
/*
class Ninieras {
    constructor(nombreNiniera, valorHora) {
        this.nombreNiniera = nombreNiniera
        this.valorHora = valorHora
    }
    calcularValorCuidado(nombreNiniera, precio, cantidadHoras) {
        alert("El valor del cuidado de " + ninieraSeleccionada + " por " + cantidadHoras + " horas " + "es de $" + (this.valorHora * cantidadHoras))
    }
}
//Declaro el array de niñeras
const ninieras = []

let cantidadNinieras = +prompt("Ingrese la cantidad de niñeras que quiere dar de alta: ")
if (cantidadNinieras > 0) {
    for (i = 0; i < cantidadNinieras; i++) {
        let nombreNiniera = prompt("Ingresar nombre niñera").toLocaleUpperCase();

        let valorHora = +prompt("Ingrese su valor hora");
        ninieras.push(new Ninieras(nombreNiniera, valorHora))
    }
} else {
    alert("El valor ingresado es incorrecto")
}

if (ninieras.length > 0) {
    let verDetalleNinieras = prompt("Ha ingresado " + ninieras.length + "niñeras a la base de datos, desea ver el detalle? S/N")


    if (verDetalleNinieras.toLocaleUpperCase() === "S") {
        alert("Ver detalle: ");
        for (const niniera of ninieras) {

            alert("Nombre niñera: " + niniera.nombreNiniera + ", valor Hora: " +
                niniera.valorHora)
        }


    } else {
        alert("ocultarDetalle")
    }
} else {
    alert("ocurio un error al ingresar las niñeras a la base")
}
*/

/*Inicio Cargar Actividades*/

/*
class Actividades {
    constructor(nombreActividad, valorActividad, fechaActividad) {
        this.nombreActividad = nombreActividad
        this.valorActividad = valorActividad
            // this.fechaActividad = newDate(fechaActividad)
        this.fechaActividad = fechaActividad
    }
    calcularCuantosDiasFaltan(nombreActividad, fechaActividad, fechaHoy) {
        alert("fecha hoy " + Date.parse(fechaHoy))
        let difMiliseg = Math.abs(fechaActividad - Date.parse(fechaHoy))
        alert("resta " + Math.abs(fechaActividad - Date.parse(fechaHoy)))
        let resta = difMiliseg / (1000 * 60 * 60 * 24)
        alert("dias de diferencia: " + resta)

        //alert("entra a cuantos días faltan" + " Nombre de actividad: " + nombreActividad + " Valor actividad: " + valorActividad + " fecha actividad " + fechaActividad + " fecha de hoy " + fechaHoy)

    }
}
//Declaro el array de actividades
/*
const actividades = []

let cantidadActividades = +prompt("Ingrese la cantidad de actividades que quiere dar de alta: ")

if (cantidadActividades > 0) {
    for (i = 0; i < cantidadActividades; i++) {
        // let nombreActividad = prompt("Ingresar nombre actividad");
        let nombreActividad = prompt("Ingrese el nombre de la actividad")
        let valorActividad = +prompt("Ingrese el valor de la actividad")

        let fechaActividad = Date.parse(prompt("Ingrese la fecha en la que se realizará la actividad en formato AAAA-MM-DD"))


        actividades.push(new Actividades(nombreActividad, valorActividad, fechaActividad))
    }
} else {
    alert("El valor ingresado es incorrecto")
}

if (actividades.length > 0) {
    let verDetalleActividades = prompt("Ha ingresado " + actividades.length + "actividades a la base de datos, desea ver el detalle? S/N")


    if (verDetalleActividades.toLocaleUpperCase() === "S") {
        alert("Ver detalle: ");
        for (const actividad of actividades) {

            alert("Nombre actividad: " + actividad.nombreActividad + ", valor Actividad: " +
                actividad.valorActividad + ", fecha de actividad: " + actividad.fechaActividad)
            actividad.calcularCuantosDiasFaltan(actividad.nombreActividad, actividad.fechaActividad, new Date())
        }

        1

        1


    } else {
        alert("ocultarDetalle")
    }
} else {
    alert("ocurio un error al ingresar las actividades a la base")
}


Fin Cargar Actividades */



/*Esta había sido la idea sin la interacción con el Dom */
//Declaro el array de actividades
/*
const actividades = []
let cantidadActividades = +prompt("Ingrese la cantidad de actividades que quiere dar de alta: ")

if (cantidadActividades > 0) {
    for (i = 0; i < cantidadActividades; i++) {
        // let nombreActividad = prompt("Ingresar nombre actividad");
        let nombreActividad = prompt("Ingrese el nombre de la actividad")
        let valorActividad = +prompt("Ingrese el valor de la actividad")
        let fechaActividad = Date.parse(prompt("Ingrese la fecha en la que se realizará la actividad en formato AAAA-MM-DD"))
        actividades.push(new Actividades(nombreActividad, valorActividad, fechaActividad))
    }
} else {
    alert("El valor ingresado es incorrecto")
}

if (actividades.length > 0) {
    let verDetalleActividades = prompt("Ha ingresado " + actividades.length + "actividades a la base de datos, desea ver el detalle? S/N")

    if (verDetalleActividades.toLocaleUpperCase() === "S") {
        alert("Ver detalle: ");
        for (const actividad of actividades) {

            alert("Nombre actividad: " + actividad.nombreActividad + ", valor Actividad: " +
                actividad.valorActividad + ", fecha de actividad: " + actividad.fechaActividad)
            actividad.calcularCuantosDiasFaltan(actividad.nombreActividad, actividad.fechaActividad, new Date())
        }
    } else {
        alert("ocultarDetalle")
    }
} else {
    alert("ocurio un error al ingresar las actividades a la base")
}
*/

/*Desafíos Incluye Entrega 20-6 y 22-6*/


/*Accordion*/
const accordionBtns = document.querySelectorAll(".accordion");
accordionBtns.forEach((accordion) => {
    accordion.onclick = function() {

        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            //Si está abierto
            content.style.maxHeight = null;
        } else {
            //Si está cerrado
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        }
    };
});


/*Inicio Cargar Actividades*/
class Actividades {
    constructor(nombreActividad, valorActividad, fechaActividad) {
        this.nombreActividad = nombreActividad
        this.valorActividad = valorActividad
        this.fechaActividad = fechaActividad
    }
    calcularCuantosDiasFaltan(nombreActividad, fechaActividad, fechaHoy) {
        let difMiliseg = Math.abs(fechaActividad - Date.parse(fechaHoy))
        let resta = difMiliseg / (1000 * 60 * 60 * 24)
    }
}

function calcularCuantosDiasFaltan(nombreActividad, fechaActividad, fechaHoy) {
    let fechaHoyEnMili = Date.parse(fechaHoy);
    let fechaActividadEnMili = Date.parse(fechaActividad);

    const diffTime = Math.abs(fechaActividadEnMili - fechaHoyEnMili);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    return diffDays;
}


/*Levantar las Actividades del form*/
let nombreActividad, valorActividad, fechaActividad;
const actividades = []

function obtenerDatos() {
    nombreActividad = document.getElementById("nombreActividad").value;
    valorActividad = document.getElementById("valorActividad").value;
    fechaActividad = document.getElementById("fechaActividad").value;

    let actividad = [nombreActividad, valorActividad, fechaActividad];

    actividades.push(new Actividades(nombreActividad, valorActividad, fechaActividad));

    let diasRestantes = calcularCuantosDiasFaltan(nombreActividad, fechaActividad, new Date());

    let contenedor = document.querySelector('#contenido');
    let p = document.createElement('p');
    p.innerText = "Se creó la actividad :" + nombreActividad + " Faltan : " + diasRestantes + " días, el valor de la actividad es de:   " + valorActividad + " Pesos ";
    contenedor.appendChild(p);

    return actividad;
}
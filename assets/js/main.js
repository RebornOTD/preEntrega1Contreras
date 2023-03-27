let nombreUsuario;

function pedirNombre() {
    nombreUsuario = prompt("¡Bienvenido/a a Karina's Catering y Viandas! Por favor ingresa tu nombre:");
    if (nombreUsuario == null || nombreUsuario == "") {
        pedirNombre();
    }
}

pedirNombre();

let opcionesMenu = {
    1: {
        nombre: "comun",
        precio: 800
    },
    2: {
        nombre: "saludable",
        precio: 750
    },
    3: {
        nombre: "vegano",
        precio: 780
    }
};

let tipoDeMenu;

function pedirTipoDeMenu() {
    let mensajeOpciones = "Por favor, elija una de las siguientes opciones de menú:\n\n";
    for (let opcion in opcionesMenu) {
        mensajeOpciones += opcion + ". " + opcionesMenu[opcion].nombre + " ($" + opcionesMenu[opcion].precio + " ARS)\n";
    }
    tipoDeMenu = prompt(mensajeOpciones);
    if (!(tipoDeMenu in opcionesMenu)) {
        alert("Opción de menú inválida. Por favor, vuelva a intentarlo.");
        pedirTipoDeMenu();
    }
}

pedirTipoDeMenu();

let cantidadPorciones = {};

function pedirCantidadPorciones() {
    for (let opcion in opcionesMenu) {
        let cantidad = prompt("¿Cuántas porciones de " + opcionesMenu[opcion].nombre + " desea?");
        cantidad = parseInt(cantidad);
        if (isNaN(cantidad)) {
            alert("Lo siento, cantidad inválida. Por favor, vuelva a intentarlo.");
            pedirCantidadPorciones();
            break;
        } else {
            cantidadPorciones[opcion] = cantidad;
        }
    }
}

pedirCantidadPorciones();

let precioTotal = 0;
for (let opcion in opcionesMenu) {
    precioTotal += opcionesMenu[opcion].precio * cantidadPorciones[opcion];
}

alert("¡Gracias, " + nombreUsuario + "! El precio total de las porciones elegidas es de $" + precioTotal + " ARS.");
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Aca asigno el contenedor donde muestro la lista de numeros primos 
const primosContenedor = document.getElementById('primosContenedor');

// Crear una variable para almacenar el contenido HTML
let contenidoPrimos = '<ul>';  

// Iterar sobre los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        // Agregar cada número primo como un ítem de la lista
        contenidoPrimos += `<li>${i}</li>`;
    }
}

contenidoPrimos += '</ul>';  

// Insertar el contenido dentro del contenedor 'primosContenedor'
primosContenedor.innerHTML = contenidoPrimos;

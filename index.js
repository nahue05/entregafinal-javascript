function Persona(nombre, apellido, edad, dias,){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dias = dias;
}
document.addEventListener('DOMContentLoaded', () => {
    if (datosClientes.length != 0) { 
        actualizarVistaClientesRegistrados();
    }
})
let boton = document.getElementById("boton");
boton.onclick = capturar;
let boton2 = document.getElementById("boton2")
boton2.onclick = cerrarSesion;

function capturar(onclick){
    onclick.preventDefault();
    let nombreCapturar = document.getElementById("nombre").value;
    let apellidoCapturar = document.getElementById("apellido").value;
    let edadCapturar = document.getElementById("edad").value;
    let diasCapturar = document.getElementById("dias").value;
    if (edadCapturar < 18){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No estas habilitado a alquilar vehiculos',
        })
    }
    if (nombreCapturar == '' || apellidoCapturar == '' || edadCapturar == '' || diasCapturar == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'los campos no pueden estar vacios',
        })
    }

    let nuevoCliente = new Persona(nombreCapturar,apellidoCapturar,edadCapturar,diasCapturar);
    agregar(nuevoCliente);
}

const actualizarVistaClientesRegistrados = () => {
    let container = document.querySelector('.table')     
    container.innerHTML = '';
    for (const nuevoCliente of datosClientes){
        container.innerHTML += `<tbody>
        <td>${nuevoCliente.nombre}</td>
        <td>${nuevoCliente.apellido}</td>
        <td>${nuevoCliente.edad}</td>
        <td>${nuevoCliente.dias}</td>
        </tbody>`;
    }
}

const datosClientes = JSON.parse(localStorage.getItem('cliente1')) || []; 

function agregar(nuevoCliente){
    datosClientes.push(nuevoCliente);
    document.getElementById("tabla").innerHTML += `<tbody>
            <td>${nuevoCliente.nombre}</td>
            <td>${nuevoCliente.apellido}</td>
            <td>${nuevoCliente.edad}</td>
            <td>${nuevoCliente.dias}</td>
            </tbody>`; 
    localStorage.setItem("cliente1", JSON.stringify(datosClientes));
    actualizarVistaClientesRegistrados();
};


function cerrarSesion(event){
    event.preventDefault();
    datosClientes = [];   //A clientes le asigno un array vació
    localStorage.setItem('clientes', JSON.stringify(datosClientes));   //Actualizo el localStorage
    actualizarVistaClientesRegistrados();
    }

const carta = document.getElementById("carta");
fetch("./catalogo.json")
.then(resp => resp.json())
.then(productos => {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="container">
            <div class="card">
                <figure>
                <img src="${producto.Imagen}">
                </figure>
                <div class="contenido">
                <h3>${producto.Marca}</h3>
                <p>Precio por dia: ${producto.Precio}</p>
                <a href="./registro.html">Alquilar</a>
                </div>
            </div>
        </div>
        `;
        carta.append(div)
    })
})


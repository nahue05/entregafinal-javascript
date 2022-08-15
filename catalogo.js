const lista = document.getElementById("lista");
fetch("./catalogo.json")
.then(resp => resp.json())
.then(productos => {
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h1>${producto.Marca}</h1>
        <img src="${producto.Imagen}">
        <h3>Precio por dia:${producto.Precio}</h3>
        <hr/>
        `;
        lista.append(li)
    })
})
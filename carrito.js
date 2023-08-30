// Función para mostrar la lista de productos
function mostrarProductos(productos) {
    let listaProductos = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
      listaProductos += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(listaProductos);
  }

  // Función para seleccionar un producto
  function seleccionarProducto(productos) {
    mostrarProductos(productos);
    return parseInt(prompt("Selecciona un producto (número) o presiona 0 para salir:"));
  }

  // Función para realizar la compra de productos
  function comprarProductos(productos) {
    const carrito = [];
    let continuar = true;

    while (continuar) {
      const opcion = seleccionarProducto(productos);

      if (opcion === 0) {
        continuar = false;
      } else if (opcion >= 1 && opcion <= productos.length) {
        const productoSeleccionado = productos[opcion - 1];
        carrito.push(productoSeleccionado);
        alert(`${productoSeleccionado.nombre} se añadió al carrito.`);
      } else {
        alert("Opción inválida. Por favor, selecciona un producto válido.");
      }
    }

    return carrito;
  }

  // Función para mostrar el contenido del carrito
  function mostrarCarrito(carrito) {
    let total = 0;
    let listaComprados = "Has comprado los siguientes productos:\n";

    carrito.forEach(producto => {
      listaComprados += `${producto.nombre} - $${producto.precio}\n`;
      total += producto.precio;
    });

    return { listaComprados, total };
  }

  // Definición de productos con objetos
  const productos = [
    { nombre: "Cuencos", precio: 3500 },
    { nombre: "Platos", precio: 1500 },
    { nombre: "Macetas", precio: 2000 },
    { nombre: "Tazas Chinas", precio: 2600 },
    { nombre: "Platos", precio: 1500 }
  ];

  // Mensaje de bienvenida
  alert("Bienvenido al simulador de carrito de compras.");

  // Preguntar al usuario si desea buscar productos por nombre
  const buscarNombre = prompt("¿Deseas buscar productos por nombre? (si/no)").toLowerCase();

  if (buscarNombre === 'si') {
    const nombreBuscado = prompt("Ingresa el nombre del producto que deseas buscar:");
    const productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));

    if (productosEncontrados.length > 0) {
      alert("Productos encontrados:");
      mostrarProductos(productosEncontrados);
    } else {
      alert("No se encontraron productos con ese nombre.");
    }
  }

  const carritoUsuario = comprarProductos(productos);
  if (carritoUsuario.length > 0) {
    const { listaComprados, total } = mostrarCarrito(carritoUsuario);
    alert(listaComprados + `Total: $${total}. ¡Gracias por tu compra!`);
  } else {
    alert("No has comprado ningún producto. ¡Hasta luego!");
  }
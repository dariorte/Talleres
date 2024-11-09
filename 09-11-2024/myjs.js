// Función del contador
let count = 0;
let increment = 1;

document.getElementById("incrementBtn").addEventListener("click", () => {
    count += increment;
    document.getElementById("counter").textContent = count;

    if (count % 5 === 0 && increment < 100) {
        increment++;
    }

    if (count >= 100) {
        document.getElementById("incrementBtn").disabled = true;
    }
});

// Función para convertir texto a mayúsculas al salir de la caja de texto
document.getElementById("reactiveInput").addEventListener("blur", () => {
    let input = document.getElementById("reactiveInput");
    input.value = input.value.toUpperCase();
});

// Cambiar imagen al pasar el mouse
document.getElementById("hoverImage").addEventListener("mouseenter", () => {
    document.getElementById("hoverImage").src = "img/imagen2.jpg";
});

document.getElementById("hoverImage").addEventListener("mouseleave", () => {
    document.getElementById("hoverImage").src = "img/imagen1.jpg"; 
});

// Aumentar y reducir el tamaño del texto de los títulos
let fontSize = 24;
document.getElementById("increaseTextSizeBtn").addEventListener("click", () => {
    fontSize += 2;
    document.querySelector(".title").style.fontSize = fontSize + "px";
});

document.getElementById("decreaseTextSizeBtn").addEventListener("click", () => {
    fontSize -= 2;
    if (fontSize >= 24) {
        document.querySelector(".title").style.fontSize = fontSize + "px";
    }
});




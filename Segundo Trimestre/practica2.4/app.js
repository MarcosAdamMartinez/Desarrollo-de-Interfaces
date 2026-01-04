document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNCIONES AUXILIARES ---
    // He creado esta función para no tener que copiar y pegar el mismo if/else 
    // cada vez que valido un campo. Simplemente le cambio el CSS (verde/rojo) y el mensaje.
    function pintar(campo, texto, estaBien, mensajeError) {
        if (estaBien) {
            campo.className = 'campo-ok'; // Clase para borde verde
            texto.textContent = 'Correcto';
            texto.className = 'msg msg-ok'; 
        } else {
            campo.className = 'campo-error'; // Clase para borde rojo
            texto.textContent = mensajeError;
            texto.className = 'msg msg-error'; 
        }
    }

    // --- VALIDACIONES EN TIEMPO REAL (INPUT) ---

    // 1. VALIDACIÓN DEL NOMBRE (Lo que venía en la imagen)
    let inputNombre = document.getElementById('nombre');
    let msgNombre = document.getElementById('msgNombre'); // Asumo que el span se llama así en el HTML

    inputNombre.addEventListener('input', function() {
        let valor = inputNombre.value;
        
        // En la imagen pedía length < 3 para dar error.
        // Aquí lo pongo al revés: es correcto si es mayor o igual a 3.
        let esCorrecto = valor.length >= 3;

        // Uso mi función pintar en vez de cambiar el style.color a mano como en la imagen,
        // así queda igual que el resto del formulario.
        pintar(inputNombre, msgNombre, esCorrecto, "Nombre inválido, inserte al menos tres caracteres");
    });


    // 2. VALIDACIÓN DE EDAD
    let edad = document.getElementById('edad');
    let textoEdad = document.getElementById('msgEdad');

    edad.addEventListener('input', function() {
        let numero = parseInt(edad.value);
        
        // Compruebo que sea número y el rango de edad 
        let esCorrecto = !isNaN(numero) && numero >= 16 && numero <= 60;
        
        pintar(edad, textoEdad, esCorrecto, "Pon una edad entre 16 y 60");
    });


    // 3. VALIDACIÓN DE EMAIL
    let email = document.getElementById('email');
    let textoEmail = document.getElementById('msgEmail');

    email.addEventListener('input', function() {
        // Paso a minúsculas para facilitar la comprobación
        let valor = email.value.toLowerCase();
        
        // Aquí valido todas las condiciones:
        // Arroba, punto, longitud min 6 y que NO tenga 'yahoo'
        let esCorrecto = valor.includes('@') && 
                         valor.includes('.') && 
                         valor.length >= 6 && 
                         !valor.includes('yahoo');
        
        pintar(email, textoEmail, esCorrecto, "Email mal o yahoo prohibido");
    });


    // --- BOTONES DE CONTROL ---
    let botonRecargar = document.getElementById('btnReload');
    botonRecargar.addEventListener('click', function() {
        location.reload();
    });

    let botonLimpiar = document.getElementById('btnReset');
    botonLimpiar.addEventListener('click', function() {
        
        let todosInputs = document.querySelectorAll('input');
        let todosTextos = document.querySelectorAll('.msg');
        
        // Bucle para limpiar los inputs
        for(let i=0; i < todosInputs.length; i++) {
            todosInputs[i].className = '';
        }
        // Bucle para vaciar los mensajes de error/ok
        for(let i=0; i < todosTextos.length; i++) {
            todosTextos[i].textContent = '';
        }
    });

    
    // --- ENVÍO DEL FORMULARIO (SUBMIT) ---
    let formulario = document.getElementById('formMatricula');

    formulario.addEventListener('submit', function(evento) {
        // Paro el envío para que no recargue la página y pueda validar con JS
        evento.preventDefault(); 
        
        let listaErrores = []; // Array para ir acumulando los fallos

        // 1. Validar Nombre (¡Nuevo!)
        // Tengo que validarlo también aquí, porque si el usuario no toca el input
        // y le da a enviar directamente, el evento 'input' de arriba no salta.
        if (inputNombre.value.length < 3) {
            listaErrores.push("El nombre debe tener al menos 3 caracteres.");
        }

        // 2. Validar Edad 
        let valorEdad = parseInt(edad.value);
        if (isNaN(valorEdad) || valorEdad < 16 || valorEdad > 60) {
            listaErrores.push("La edad está mal.");
        }

        // 3. Validar Email
        let valorEmail = email.value.toLowerCase();
        if (!valorEmail.includes('@') || !valorEmail.includes('.') || valorEmail.length < 6 || valorEmail.includes('yahoo')) {
            listaErrores.push("El email está mal.");
        }

        // 4. Validar el Select del ciclo
        let ciclo = document.getElementById('ciclo');
        if (ciclo.value === "") {
            listaErrores.push("Falta elegir el ciclo.");
        }

        // 5. Validar los Checkboxes
        let casillas = document.getElementsByName('modulos');
        let contador = 0;
        let elegidos = []; 
        
        // Recorro todas las casillas para ver cuántas tienen el .checked
        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].checked) {
                contador++;
                elegidos.push(casillas[i].value); 
            }
        }

        if (contador < 2) {
            listaErrores.push("Marca al menos 2 módulos.");
        }

        // 6. Validar el Check de condiciones
        let acepto = document.getElementById('acepto');
        if (!acepto.checked) {
            listaErrores.push("Tienes que aceptar las condiciones.");
        }

        
        // --- MOSTRAR RESULTADOS ---
        if (listaErrores.length > 0) {
            // Si hay errores, los muestro en un alert separados por saltos de línea (\n)
            alert("HAY ERRORES:\n" + listaErrores.join("\n"));
        } else {
            // SI TODO ESTÁ CORRECTO:
            
            let nombreFinal = inputNombre.value; // Cojo el valor del input de arriba
            let obs = document.getElementById('obs').value;

            // Sustituyo todo el HTML del body para mostrar la tarjeta
            document.body.innerHTML = `
                <div class="card">
                    <h1>Matrícula Correcta</h1>
                    <p>Alumno: <b>${nombreFinal}</b></p>
                    <p>Edad: <b>${valorEdad}</b></p>
                    <p>Email: <b>${valorEmail}</b></p>
                    <p>Ciclo: <b>${ciclo.value}</b></p>
                    <p>Módulos: <b>${elegidos.join(', ')}</b></p>
                    <p>Observaciones: <b>${obs}</b></p>
                    <button onclick="location.reload()">Volver</button>
                </div>
            `;
        }
    });
});
function mostrarOrdenado() {
    
    // Creo una agrupacion (acabo de aprender a hacerlas gracias a mi compañero):
    console.group("Informacion Ordenada Del BOM");

        // Creo una agrupacion para el navigator:
        console.group("Navigator");
        // Muestro los datos:
        console.log("Datos del usuario: "+navigator.userAgent);
        console.log("Idioma: "+navigator.language);
        console.log("S.O.: "+navigator.platform);
        // Cierro la agrupacion del navigator:
        console.groupEnd();

        // Repito con el screen:
        console.group("Screen");
        console.log("Resolucion: "+screen.width+" x "+screen.height);
        console.log("Ancho disponible: "+screen.availWidth);
        console.log("Alto disponible: "+screen.availHeight);
        console.groupEnd();

        // Repito con el location:
        console.group("Location");
        console.log("Link principal: "+location.href);
        console.log("HostName: "+location.hostname);
        console.log("PathName: "+location.pathname);
        console.groupEnd();

        // Repito con el document:
        console.group("Document");
        console.log("Titulo: "+document.title);
        document.title = "Nuevo titulo"
        console.log("Titulo nuevo: "+document.title);
        console.groupEnd();

        // Repito con el history:
        console.group("History");
        console.log("El historial tiene: "+history.length+" entradas")
        console.groupEnd();

        // Repito con el console:
        console.group("Console");
        console.log("Esto es un log");
        console.warn("Esto es una advertencia");
        console.error("Esto es un error"); console.table([1, 2, 3, 4]);
        console.groupEnd();

        // Repito con el performance:
        console.group("Performance");
        console.log("Rendimiento actual: "+performance.now());
        let inicio = performance.now(); 
        for (let i = 0; i < 1_000_000; i++) { } 
        let fin = performance.now(); 
        console.log("Tiempo de ejecucion del bucle: "+(fin-inicio)+"ms");
        console.groupEnd();

        // Repito con el document.cookie:
        console.group("Document Cookies");
        console.log("Cookies Actuales: "+document.cookie);
        document.cookie = "usuario=Marcos; max-age=300";
        console.log("Cookies despues de crear una: "+document.cookie);
        console.groupEnd();


    // Cierro la agrupacion principal:
    console.groupEnd();

}
mostrarOrdenado();
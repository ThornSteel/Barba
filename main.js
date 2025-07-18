document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnJugar");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // Previene que abra WhatsApp inmediatamente

            // Captura del navegador y resolución de pantalla
            const userAgent = encodeURIComponent(navigator.userAgent);
            const screenSize = `${screen.width}x${screen.height}`;

            // URL completa de tu Web App con parámetros
            const url = `https://script.google.com/macros/s/AKfycbwUmLvXde7DdLeevRGpFxYWKRT89c1ZxtnUheY0GhEdpAAm5Z37Dgs4gESOT9K5wh5UaA/exec?ua=${userAgent}&screen=${screenSize}`;

            // Envío del clic (sin esperar respuesta por CORS)
            fetch(url, {
                method: "GET",
                mode: "no-cors"
            });

            // Pequeño delay antes de abrir WhatsApp para asegurar el registro
            setTimeout(() => {
                window.open(this.href, "_blank");
            }, 200);
        });
    }
});

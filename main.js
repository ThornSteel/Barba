document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnJugar");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que se abra el link inmediatamente

            fetch("https://script.google.com/macros/s/AKfycbwUmLvXde7DdLeevRGpFxYWKRT89c1ZxtnUheY0GhEdpAAm5Z37Dgs4gESOT9K5wh5UaA/exec")
                .then(response => {
                    if (!response.ok) throw new Error("Error al registrar clic");
                    return response.text();
                })
                .then(data => {
                    console.log("Clic registrado:", data);
                    window.open(this.href, "_blank"); // Abrir WhatsApp luego de registrar
                })
                .catch(err => {
                    console.error("Error:", err);
                    window.open(this.href, "_blank"); // Igual lo abre si falla
                });
        });
    }
});

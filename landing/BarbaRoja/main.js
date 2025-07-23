document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnJugar");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const userAgent = encodeURIComponent(navigator.userAgent);
            const screenSize = `${screen.width}x${screen.height}`;

            const url = `https://script.google.com/macros/s/AKfycbwUmLvXde7DdLeevRGpFxYWKRT89c1ZxtnUheY0GhEdpAAm5Z37Dgs4gESOT9K5wh5UaA/exec?ua=${userAgent}&screen=${screenSize}`;

            fetch(url, {
            method: "GET",
            mode: "cors"
            });

            setTimeout(() => {
                window.open(this.href, "_blank");
            }, 200);
        });
    }
});

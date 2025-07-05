
  document.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.getElementById("musicPlayer");
    const musicControl = document.getElementById("musicControl");
    const controlIcon = document.getElementById("controlIcon");

    // Manejar clic en el botón
    musicControl.addEventListener("click", () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            controlIcon.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            musicPlayer.pause();
            controlIcon.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});


function actualizarContador() {
    const fechaObjetivo = new Date("2025-07-26T14:00:00");
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
    } else {
        document.getElementById("dias").textContent = 0;
        document.getElementById("horas").textContent = 0;
        document.getElementById("minutos").textContent = 0;
    }
}

setInterval(actualizarContador, 1000);
actualizarContador(); // Actualiza inmediatamente al cargar la página

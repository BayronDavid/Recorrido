function checkIframeSize() {
    const desktopIframe = document.getElementById('desktop-iframe');
    const mobileIframe = document.getElementById('mobile-iframe');
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        desktopIframe.style.display = 'block';
        mobileIframe.style.display = 'none';
    } else {
        desktopIframe.style.display = 'none';
        mobileIframe.style.display = 'block';
    }
}

// Ejecutar la función al cargar la página
window.addEventListener('DOMContentLoaded', checkIframeSize);
// Ejecutar la función al cambiar el tamaño de la ventana
window.addEventListener('resize', checkIframeSize);

// El formulario ahora se enviará normalmente a gracias.html
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function() {
        // Permitir que el formulario se envíe normalmente
        return true;
    });
});
// Función para mostrar la pantalla de login redirigiendo al archivo login/index.html
function showLoginPage() {
    window.location.href = "../Login/Login.html"; // Redirige a la pantalla de login
}

// Escucha el evento de clic en el enlace de registro
document.querySelector('#register-link').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Redirigiendo a registro...');
    // Aquí puedes agregar la lógica para redirigir a la pantalla de registro, si la tienes.
});

// Escucha el evento de clic en el botón "INGRESAR" para llamar a la función showLoginPage
document.querySelector('.login-button').addEventListener('click', showLoginPage);

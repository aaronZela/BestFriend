function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica de autenticación
    console.log('Intento de inicio de sesión:', { email, password });
}

document.querySelector('#register-link').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Redirigiendo a registro...');
    // Aquí puedes agregar la lógica para redirigir a la página de registro
});

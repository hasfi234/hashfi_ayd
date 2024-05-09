const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const emailInput = document.querySelector('.sign-in input[type="email"]');
        const passwordInput = document.querySelector('.sign-in input[type="password"]');

        if (!emailInput.value || !passwordInput.value) {
            showAlert('Silakan lengkapi semua kolom!');
        } else {
            // Lanjutkan dengan proses login
            console.log('Proses login...');
        }
    });

    function showAlert(message) {
        const alertContainer = document.createElement('div');
        alertContainer.className = 'alert';
        alertContainer.textContent = message;
        alertContainer.style.color = 'red'; // Mengatur warna teks menjadi putih
        alertContainer.style.fontWeight = 'bold'; // Mengatur teks menjadi tebal

        document.body.appendChild(alertContainer);

        setTimeout(function() {
            alertContainer.remove();
        }, 3000);
    }
});

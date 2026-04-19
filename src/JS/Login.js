document.addEventListener('DOMContentLoaded', function () {
    // Referência aos elementos de input
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const submit = document.getElementById('mandar');
    const checkbox = document.getElementById('aceitar');

    // Evento de foco e desfoco para o input de e-mail
    emailInput.addEventListener('focus', function () {
        emailInput.placeholder = '';
    });

    emailInput.addEventListener('blur', function () {
        emailInput.placeholder = 'Hextek3@gmail.com';
    });

    // Evento de foco e desfoco para o input de senha
    senhaInput.addEventListener('focus', function () {
        senhaInput.placeholder = '';
    });

    senhaInput.addEventListener('blur', function () {
        senhaInput.placeholder = 'Hextek123';
    });

    // Evento para ativar/desativar o botão com base na checkbox
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            submit.disabled = false;  //Habilita o submit
        } else {
            submit.disabled = true;   //tira o submit
        }
    });
});
const toggleSwitch = document.getElementById('modeToggle');
const body = document.body;

function setThemeBasedOnTime() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        body.classList.remove('claro');
        toggleSwitch.checked = false;
    } else {
        body.classList.add('claro');
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('claro');
});

setThemeBasedOnTime();
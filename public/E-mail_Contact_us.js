document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact_us form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Parâmetros para o EmailJS
        const serviceID = 'service_jey5wrw'; // Substitua pelo seu Service ID do EmailJS
        const templateID = 'template_4xkt3w7'; // Substitua pelo seu Template ID do EmailJS
        const publicKey = 'CE7O3eEe9VG24eQB4'; // Substitua pela sua Public Key do EmailJS

        // Crie um objeto com os dados a serem enviados
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message
        };
        // Verifique se todos os campos obrigatórios estão preenchidos
        if (!name || !email || !phone || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        // Validação básica de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }
        // Validação básica de telefone (opcional)
        const phonePattern = /^\d{10,15}$/; // Aceita números de 10 a 15 dígitos
        if (phone && !phonePattern.test(phone)) {
            alert('Por favor, insira um número de telefone válido (10 a 15 dígitos).');
            return;
        }
        // Validação básica de mensagem
        if (message.length < 10) {
            alert('A mensagem deve ter pelo menos 10 caracteres.');
            return;
        }
        // Validação básica de nome
        if (name.length < 2) {
            alert('O nome deve ter pelo menos 2 caracteres.');
            return;
        }

        // Envie o email usando o EmailJS
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
                form.reset(); // Limpa o formulário após o envio
            }, function (error) {
                console.log('FAILED...', error);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
            });
    });
});
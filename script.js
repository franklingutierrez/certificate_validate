const verifyButton = document.getElementById('verify-button');
const validationCode = document.getElementById('validation-code');
const resultMessage = document.getElementById('result-message');

verifyButton.addEventListener('click', () => {
    const correctCode = '45881263'; // Replace with the correct validation code

    if (validationCode.value.trim() === correctCode) {
        // resultMessage.innerText = 'Código correcto, redirigiendo...';
        resultMessage.innerText = 'Código correcto, descargando certificado..';
        setTimeout(() => {
            window.location.href = 'Certificado_Franklin_Gutierrez.pdf'; // Replace with the URL you want to navigate to
        }, 2000);
    } else {
        resultMessage.innerText = 'Código incorrecto, por favor inténtalo de nuevo.';
    }
});
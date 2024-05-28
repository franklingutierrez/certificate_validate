const verifyButton = document.getElementById('verify-button');
const validationCode = document.getElementById('validation-code');
const resultMessage = document.getElementById('result-message');

verifyButton.addEventListener('click', () => {
    const codeToPdfMap = {
        '45881263': 'Certificado_Franklin_Gutierrez.pdf',
        '70082821': 'Certificado_Paola_Mamani.pdf'
    };

    const enteredCode = validationCode.value.trim();

    if (codeToPdfMap[enteredCode]) {
        resultMessage.innerText = 'Código correcto, descargando certificado...';
        setTimeout(() => {
            window.location.href = codeToPdfMap[enteredCode];
        }, 2000);
    } else {
        resultMessage.innerText = 'Código incorrecto, por favor inténtalo de nuevo.';
    }
});

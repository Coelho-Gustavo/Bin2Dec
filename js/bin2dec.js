var validation = 'Error';
function validateBin(element) {
    if (element !== '1' && element !== '0'){
        validation = 'Error';
    }else {
        validation = 'Ok';
    }
}

function validateForm() {
    let binary = document.getElementById('bin').value;
    binaryArray = binary.split('');
    
    binaryArray.findIndex(validateBin);
    if (validation === 'Error'){
        document.getElementById('result').value = 'O valor não é binário, tente novamente.';
    }else {
        bintodec(binary);
    }

}

function bintodec(x) {
    let resultado = parseInt(x, 2);
    document.getElementById('result').value = resultado;
}
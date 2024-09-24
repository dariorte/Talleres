// Sumar dos números
function sumNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('sumResult').innerText = `Resultado: ${result}`;
}

// Restar edades
function subtractAges() {
    const age1 = parseFloat(document.getElementById('age1').value);
    const age2 = parseFloat(document.getElementById('age2').value);
    const age3 = parseFloat(document.getElementById('age3').value);
    const diff1 = Math.abs(age1 - age2);
    const diff2 = Math.abs(age2 - age3);
    document.getElementById('restResult').innerText = `Diferencias: ${diff1}, ${diff2}`;
}

// Multiplicar dos números pares
function multiplyNumbers() {
    const mult1 = parseFloat(document.getElementById('mult1').value);
    const mult2 = parseFloat(document.getElementById('mult2').value);

    if (mult1 % 2 === 0 && mult2 % 2 === 0) {
        const result = mult1 * mult2;
        document.getElementById('multResult').innerText = `Resultado: ${result}`;
    } else {
        document.getElementById('multResult').innerText = 'Ambos números deben ser pares';
    }
}

// Dividir dos números
function divideNumbers() {
    const div1 = parseFloat(document.getElementById('div1').value);
    const div2 = parseFloat(document.getElementById('div2').value);

    if (div2 === 0) {
        document.getElementById('divResult').innerText = 'No se puede dividir entre cero';
    } else {
        const result = div1 / div2;
        document.getElementById('divResult').innerText = `Resultado: ${result}`;
    }
}

// Calculadora académica con rango de notas de 1 a 5
function calculateGrade() {
    const examGrade = parseFloat(document.getElementById('examGrade').value);
    const otherGrade = parseFloat(document.getElementById('otherGrade').value);

    // Validar que las notas estén entre 1 y 5
    if (isNaN(examGrade) || isNaN(otherGrade)) {
        document.getElementById('gradeResult').innerText = 'Por favor, ingrese valores numéricos válidos.';
        return;
    }

    if (examGrade < 1 || examGrade > 5 || otherGrade < 1 || otherGrade > 5) {
        document.getElementById('gradeResult').innerText = 'Las notas deben estar entre 1 y 5.';
        return;
    }

    // Calcular la nota final con 70% examen y 30% otras actividades
    const finalGrade = (examGrade * 0.7) + (otherGrade * 0.3);

    // Mostrar el resultado según la nota final
    if (finalGrade >= 3.0) {
        document.getElementById('gradeResult').innerText = `Aprobado con: ${finalGrade.toFixed(2)}`;
    } else {
        document.getElementById('gradeResult').innerText = `Reprobado con: ${finalGrade.toFixed(2)}`;
    }
}




const factorial = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


const calcularTablasYFactoriales = () => {
    let numero = prompt("Ingrese un número entre 1 y 20");

    
    if(numero < 1 || numero > 20) {
        console.log("Número fuera del rango");
        return;
    }


    for(let i = 1; i <= numero; i++) {
        console.log(`\nTabla del ${i}:`);
        for(let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }

        console.log(`Factorial de ${i} es: ${factorial(i)}`);
    }
}


calcularTablasYFactoriales();

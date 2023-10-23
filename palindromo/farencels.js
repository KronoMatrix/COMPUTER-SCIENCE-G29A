function fahrenheitToCelsius(gradosFahrenheit){
    const gradosCelsius = (gradosFahrenheit - 32) * 5/9;
    //return gradosCelsius;
    return gradosCelsius.toFixed(2);
}

const temperaturaFahrenheit = 50;
const temperaturaCelsius = fahrenheitToCelsius(temperaturaFahrenheit);
console.log(`La temperatura en Celsius es ${temperaturaCelsius}`);

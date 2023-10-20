let persona = {
    nombre: "Juan",
    age : 38,
    ciudad: "CDMX"
}

const {nombre, ...informacionAdicional} = persona

console.log(nombre);
console.log(informacionAdicional);

let personaCopy = {...persona, nombre: 'Lucia'}

console.log(persona);
console.log(personaCopy);
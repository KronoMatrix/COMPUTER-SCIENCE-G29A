function longestCountry(paises) {
    if (paises.length === 0) {
        return "No hay paises en la lista";
    }

let paisMasLargo = paises [0];

for (let i = 1; i < paises.length; i++) {
    if (paises[i].length > paisMasLargo.length) {
        paisMasLargo = paises[i];
    }
}
return paisMasLargo;
}

const paises = ["México", "Panamá", 
"Guatemala", "El Salvador"];
const paisMasLargo = longestCountry(paises);
console.log(longestCountry(paises));

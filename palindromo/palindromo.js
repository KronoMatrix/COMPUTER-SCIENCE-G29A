function palindrome(palabra){
    palabra = palabra.toLowerCase().replace(/\s/g, '');

    return palabra === palabra.split('').reverse().join('');
}

console.log(palindrome("Ana")); // true
console.log(palindrome("José")); // false
console.log(palindrome("Anita lava la tina")); // true
console.log(palindrome("Parangaricutirimicuaro")); // false
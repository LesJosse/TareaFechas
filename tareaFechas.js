// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
const fechaNacimiento = new Date(1996, 11, 02);
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const compararFecha = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(compararFecha);

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = new Date(1996, 11, 02);
console.log(diaNacimiento.getDay());

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = new Date(1996, 11, 02);
console.log(mesNacimiento.getMonth());

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = new Date(1996, 11, 02);
console.log(anioNacimiento.getFullYear());

// feha de hoy
const fecha = new Date();

// fecha de nacimiento
const fechaNacimiento = new Date(1996,09,19); // 19/10/1996

// comparacion de fechas
const comparaFechas = fecha.getTime() > fechaNacimiento.getTime();

// día de nacimiento
const diaNacmiento = fechaNacimiento.getDate();

//mes de nacimiento
const mesNacimiento = fechaNacimiento.getMonth();

//año nacimiento
const anioNAcimiento = fechaNacimiento.getFullYear()

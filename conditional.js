//if statement
var x = 10;
if (x > 5) {
  console.log("Nilai x lebih besar dari 5");
}
//if else statement 
var x = 2;
if (x % 2 === 0) {
  console.log("Nilai x adalah bilangan genap");
} else {
  console.log("Nilai x adalah bilangan ganjil");
}
//switch case 
var hari = "Senin";
switch(hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu");
    break;
  default:
    console.log("Hari ini adalah hari yang tidak dikenal");
}

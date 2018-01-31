var a=10, b="3c";
var wynik=a+b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a+b)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));

//int integer liczba całkowita np. 3 (c++)
//float zmiennoprzecinkowa np. 3.5 (c++)

//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda));

//string

var tekst = 'Janusz';
console.log(typeof(tekst));

//undefined
var imie;
console.log(typeof(imie));
var imie="Sandra";
console.log(typeof(imie));

//object

var tablica = ["Janusz", "Anna", "Krystyna"];
console.log(typeof(tablica))
console.log(tablica)


//##################################################


//var liczba = prompt("Podaj liczbę:")
/*var liczba1 = prompt("Podaj pierwszą liczbę", "np 3.4")
var liczba2 = prompt("Podaj drugą liczbę", "np 3.4")
//liczba1=parseInt(liczba1) liczby całkowite
//liczba2=parseInt(liczba2)

//konwersja na typ zmiennoprzecinkowy
liczba1 = parseFloat(liczba1)
liczba2 = parseFloat(liczba2)
console.log(typeof(liczba1))
console.log(typeof(liczba2))
var suma = liczba1+liczba2
document.write(suma);
console.log(typeof(suma))


//zad 1

/*mama tata oraz dziecko podają swój wiek z klawiatury
na ekranie wyświetl w formacie:

mama: .... lat
tata: .... lat
dziecko: .... lat
średni wiek wynosi ... lat*/

var wiekMama = prompt("Ile lat ma mama?")
var wiekTata = prompt("Ile lat ma tata?")
var wiekDziecko = prompt("Ile lat ma dziecko?")

wiekMama=parseFloat(wiekMama)
wiekTata=parseFloat(wiekTata)
wiekDziecko=parseFloat(wiekDziecko)

var wiekSredni = (wiekMama+wiekTata+wiekDziecko)/3
wiekSredni = wiekSredni.toFixed(2)
document.write("Mama: " + wiekMama + " lat")
document.write("<br>Tata: " +wiekTata + ' lat')
document.write("<br>Dziecko: " +wiekDziecko+' lat')
document.write("<br>Średni wiek wynosi: "+ wiekSredni +" lat")





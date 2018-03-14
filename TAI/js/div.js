//document.getElementById('blok1').innerHTML = 'Janusz';

/*var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');


b1.innerHTML = 'Anna';
b2.innerHTML = 'Jacek';

//var imie = prompt('Podaj imie');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

//Różnica pomiędzy innehHTML a textContent

inner.innerHTML = '<a href="http://wp.pl"><h1>inner</h1></a>';
content.textContent = '<a href="http://wp.pl"><h1>content</h1></a>';

/*
zad 1 Użytkownik podaje z klawiatury dwie wartości: długość podstawy oraz wysokość trójkąta.
Wyświetl wynik w divie w formacie: "Pole trójkąta wynosi:.... cm^2";
Wynik ma być w kolorze białym na tle czarnym"
Ogranicz blok wyswietlający do szerokości 200 px
Zaokrąglij wynik do 2 miejsc po przecinku.
W arkuszu stylów ustaw wyrównanie tekstu do środka
*/
var wynik = document.getElementById('wynik');
var podstawa = prompt('Podaj długość podstawy');
var wysokosc = prompt('Podaj wysokość trójkąta');
var oblicz = 0.5 * podstawa * wysokosc;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi: ' + oblicz + 'cm<sup>2</sup>';

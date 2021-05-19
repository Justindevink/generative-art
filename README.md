# Procesverslag

## Over
* **Naam:** Justin de Vink
* **Klas:** vid-1
* **Minor:** Visual Interface Design
* **Favoriete dier:** Trashpanda 🦝
* **Startniveau:** Rood?

## Concept

~~Concept 1: Stofdeeltjes~~

~~Stofdeeltjes die in het licht steeds op een andere manier zweven.
(Een beetje zoals het PS5 opstart menu)
https://www.youtube.com/watch?v=7TBPrYJDoDE~~


~~Concept 2: Kleuren cirkels~~

~~Het beeldscherm staat helemaal gevuld met cirkels, iedere keer wanneer je de pagina refreshed staan de cirkels op een andere plek.~~
~~De cirkels hebben iedere keer een andere tint van een kleur, maar de kleur veranderd wel per refresh.~~
~~Dus alle cirkels zijn een blauwe tint, daarna bijvoorbeeld groen of rood.~~

~~Een klein beetje zoals deze afbeeding:
https://www.publicdomainpictures.net/nl/view-image.php?image=198862&picture=abstracte-cirkel-achtergrond-3~~

Concept 3: Ride the Lightning

Eén van mijn favoriete albums is Ride the Lightning van Metallica, voor al de artwork van dit album vind ik ook erg mooi. Ik heb daarom niet één maar twee(!) shirts van dit album. Ik wil daarom proberen de bliksemschichten na te maken in P5.js en deze zoals echte bliksem een onvoorspelbaar patroon te geven.
https://www.bol.com/nl/p/ride-the-lightning/1000004000000463/


## Features

Je kunt bliksem op het scherm tevoorschijn laten komen door je muisknop ingedrukt te houden, ook kan je de het startpunt van de bliksem bepalen met de positie van je muis.


## Onderzoek & inspiratie

Ik ben gaan kijken hoe het patroon van bliksem er ongeveer uitziet en wat nou dat lichtgevende effect geeft dat bliksem heeft.

## Voortang

### Week-1
Ik ben op de reference pagina gaan kijken hoe het tekenen van lijnen werkt. Daarna ben ik met Line een statische lijn gaan tekenen die hetzelfde patroon heeft als een bliksemschicht. Nadat dit was gelukt, ben ik gaan zoeken hoe ik de startpositie en eindpositie van een lijn random kon maken.

https://editor.p5js.org/Justindevink/sketches/_LxNg2PQC

Tot slot kreeg ik het idee om het effect van bliksem van ver weg toe te voegen door cirkels met een lage opacity en een blur random op het scherm te laten verschijnen. Het was me gelukt om een gradient als achtergrond te maken en cirkels eenmalig op een random positie te laten verschijnen, samen met een random blauw tint.

https://editor.p5js.org/Justindevink/sketches/oQPCD28oB

### Week-2
In de tweede week ben ik gaan kijken hoe ik het einde de random lijn kon laten opvolgen met een nieuwe lijn die een andere richting op gaat. Nadat dit was gelukt kwam ik erachter dat de gekreukelde lijn nu oneindig doorging onder het canvas, waardoor je maar één bliksem per refresh kon tekenen. Dit heb ik kunnen oplossen (met hulp) door de startpositie van de lijn te resetten zodra de lijn langer is dan het canvas. Ook heb ik het lichtgevende effect van bliksem kunnen namaken door een shadow toe te voegen aan de lijnen met een blauwe tint.

Helaas werkte de gradient en de lightning functie niet goed samen, dus heb ik de gradient voor nu uitgezet. Tot slot ben ik gaan proberen de lijn op te splitsen in meerdere lijnen.

https://editor.p5js.org/Justindevink/sketches/c_5cDV2in

### Week-3
In de derde week ben ik verder gegaan met het proberen van het splitsen van de lijn, naar mijn idee ben ik best ver gekomen maar het is me helaas niet gelukt om de lijn daadwerkelijk te splitsen. Het is me wel gelukt om het moment wanneer de lijn hoort te splitsen random te bepalen. Dit moment heb ik aangegeven door de bliksem rood te maken op dat punt.

Ook heb ik de toegevoegd dat de positie van de muis het startpunt van de bliksem is, samen met de shadow van de lijnen een random blauw tint te geven i.p.v. één kleur. Tot slot heb ik het voor elkaar gekregen de lijn dikker te maken naarmate deze langer wordt. In de eerste instantie wilde ik dat de lijn dik begon en dunner werd, maar dit kreeg ik helaas niet werkend.

https://editor.p5js.org/Justindevink/sketches/idKoFkpuh

In de laatste versie heb ik met setInterval iedere 1,5s een functie kunnen activeren die de opacity van de bliksem met .1 verhoogd. Hierdoor begint de bliksem erg licht en wordt deze steeds voller. Tot slot heb de gradient en de random cirkels uit de laatste versie gehaald omdat ik deze niet werkend kreeg met de huidige code.

https://editor.p5js.org/Justindevink/sketches/fvKzK9o0u

## Eindresultaat

https://justindevink.github.io/generative-art/

Bonus - Zwarte bliksem (Ook mooi!)

https://editor.p5js.org/Justindevink/sketches/scMVd1qPk


## Bronnenlijst

* Random lijnen - https://editor.p5js.org/chjno/sketches/S1wJDPdY-
* Lijn opacity - https://editor.p5js.org/kjhollen/sketches/r1MSxWcyf
* Gradient - https://editor.p5js.org/Jaemi13/sketches/gAS-FB5Sx
* Lijn opsplitsen - https://betterprogramming.pub/learning-p5-js-by-making-fractals-cbdcac5c651e

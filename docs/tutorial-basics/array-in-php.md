---
sidebar_position: 1
---
# Array in PHP: concetti generali

1. Array in PHP

Nella programmazione per array s’intende un tipo di dato complesso.
Strettamente connesso al concetto di array è il vettore in algebra lineare.
Possiamo, quindi, definire un array come una collezione di oggetti.
Esempio di dichiarazione di un array nel linguaggio php:


```
<?php
$array = ["Luca", "Mario", "Dario", "Andrea"];
?>
```

2. Come ciclare un’array

Per passare in rassegna tutti gli elementi che compongono l’array possiamo utilizzare l’istruzione for (o
forEach), cioè un ciclo all’interno del quale l’istruzione viene ripetuta per n. volte; dove n sarà il numero di
elementi che compongono l’array


```
<?php
for ($i = 0; $i < count($array); $i++){
    echo $array;
}
?>
```

3. Con l'istruzione echo stampiamo a schermo il contenuto dell'array.

4. Per questa lezione è tutto.




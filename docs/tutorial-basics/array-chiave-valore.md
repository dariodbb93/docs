---
sidebar_position: 2
---
# Array chiave - valore in PHP

1. Array in chiave - valore in PHP

In php, oltre agli array normali, è possibile dichiarare un array associativo c.d. ‘chiave-valore’.
Le chiavi dell’array saranno quindi delle stringhe anziché dei numeri interi.


```
<?php
$array = [
    'nome' => 'Dario',
    'cognome' => 'Del Bel Belluz',
    'età' => 29,
    'lavoro' => 'sviluppatore'
    ];
?>
```

2. Come ciclare un’array chiave - valore con la sintassi foreach

Per passare in rassegna tutti gli elementi dell’array chiave-valore possiamo utilizzare la seguente sintassi:


```
<?php
foreach ($array as $element){
    echo $element;
}
?>
```


3. Per questa lezione è tutto.




---
sidebar_position: 3
---

# Classi e oggetti in PHP

1. Concetti generali

Gli oggetti sono una pseudo-rappresentazione di un elemento ‘reale’, il concetto si estende non solo per
php, ma anche per gli altri linguaggi di programmazione.
In particolare ogni oggetto ha delle proprietà e dei metodi.
Vediamo un esempio in php prendendo in esame una persona:


```
<?php
class Persona
{
    public $nome;
    public $cognome;
    public $eta;
    function __construct(£nome, $cognome, $eta){
        $this->nome = nome;
        $this->cognome = cognome;
        $this->eta = eta;
    }

function saluta(){
    echo "ciao mi chiamo" . $this->nome . $this.cognome. "e ho" . this->eta . "anni";
    }
}
?>
```

2. Creazione di un'istanza di classe Persona

Abbiamo creato una oggetto di classe ‘Persona’ con alcune proprietà (nome, cognome ed età) ed un
metodo cioè ‘saluta’.
Questo è un prototipo, ci servirà dopo per generare degli altri oggetti con queste proprietà.
Possiamo, quindi, creare un costruttore di classi che ‘estende’ le proprietà dalla Classe persona:

```
<?php
$studente = new Persona("Dario", "Del Bel Belluz", 29);
$studente->saluta();
?>
```

3. Per questa lezione è tutto.
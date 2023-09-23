---
sidebar_position: 1
---
# Proprietà e metodi nel linguaggio Java

1. Programmazione orientata agli oggetti in Java

Una classe è una struttura dati complessa che è formata da:
*  proprietà;
* metodi.

Le proprietà sono delle variabili proprie della classe, mentre i metodi delle funzioni.
Vediamo un esempio di classe in linguaggio Java.


```
public class Persona{
    String nome;
    String cognome;
    int eta;

    Persona(String nome, String cognome, int eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;

    }

    void saluta(){
        System.out.println("ciao mi chiamo "+ nome+ "e ho "+ eta "anni")
    }
}
```

2. Creazione di un'istanza di classe Persona

Abbiamo preso in esame un’ipotetica persona che ha delle proprietà (nome, cognome, età) ed un metodo
che è quello di salutare e dire come si chiama.
Nel main possiamo creare un’istanza di classe Persona tramite la seguente sintassi.


```
public class Main{
    public static void main(String args[]){
        Persona persona = new Persona("Dario", "Del Bel Belluz", 29);
        persona.saluta();
    }
}
```


3. Per questa lezione è tutto.




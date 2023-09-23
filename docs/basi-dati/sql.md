---
sidebar_position: 1
---
# Basi di dati relazionali

1. Principi generali

Si definisce database relazionale una struttura dati complessa che immagazzina delle informazioni.
È possibile pensare alla struttura di un database come ad una tabella:

|ID | NOME |COGNOME | GENERE |
|---| -----|--------|--------|
|1  |MARIO |ROSSI   |M       |
|2  |GIANNI|BIANCHI |M       |
|3  |MARIO |ROSSI   |M       |


Le informazioni succitate fanno riferimento, evidentemente, a tre persone fittizie.
In semplici parole, tramite i database, è possibile mappare delle proprietà di un oggetto (nel nostro caso
una persona).

Le colonne (column) indicano le proprietà dell’oggetto, mentre i record (row) indicano i valori delle
proprietà dello stesso.

Qualora un campo assuma solo e soltanto se valori univoci lungo tutti i record della tabella si dirà che
questo è una potenziale chiave primaria (primary key).

La chiave primaria è quella importantissima proprietà che consente di indentificare in maniera
assolutamente univoca un record di una tabella. Nel nostro esempio abbiamo ben n. 2 ‘MARIO ROSSI’ ma
uno ha chiave ID = 1 mentre l’altro ID = 3. Le due entità sono quindi ben distinte.

Tramite il linguaggio SQL è possibile creare un database ed una tabella associata, riprendendo l’esempio
precedente scriveremo le seguenti righe di codice SQL:


2. Codice SQL (mySQL)

```
CREATE TABLE PERSONE(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(255),
    COGNOME VARCHAR(255),
    GENERE VARCHAR(1)
);
```

3. Per questa lezione è tutto.



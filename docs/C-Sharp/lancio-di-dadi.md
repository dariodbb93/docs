---
sidebar_position: 1
---
# Dado elettronico in C-Sharp

Vediamo come creare un programma che dato in input un numero intero (quante volte voglio lanciare un
dado) -> restituisca un array con il risultato ed il valore medio dei lanci.
Per fare questo esercizio ho sfruttato appieno la programmazione orientata agli oggetti di C#.

1. Ho implmentato il controller che gestirà la logca applicativa del mio software

```
namespace dado
{
    public class Controller
    {
        public static List<int> generaLanci(int numeroLanci)
        {
            var random = new Random();
            var array = new List<int>();

            for (int i = 0; i < numeroLanci; i++)
            {
                array.Add(random.Next(1, 7));
            }
            return array;
        }
        public static void printArray(List<int> array)
        {
            System.Console.WriteLine("Hai lanciato il dado "+array.Count+ " volte");


            foreach (var item in array)
            {
                System.Console.Write(item + ",");
            }
        }
        public static double average(List<int> array)
        {
            double sum = 0;

            foreach (var item in array)
            {
                sum += item;
            }

            return (sum / array.Count);
        }

    }

}
```
La classe Controller contiene l’intera logica applicativa del programma.
I metodi contenuti all’interno della classe sono statici, ossia ‘sono comuni ad ogni istanza’ e per invocarli
non è necessario creare una nuova istanza, ma è possibile accedervi direttamente dalla classe stessa.

2. Creazione di program.cs

```
using dado;
int inputInt;
Boolean status = false;
do
{


    Console.WriteLine("Inserisci il numero di lanci: ");
    string? input = Console.ReadLine();
    if (int.TryParse(input, out inputInt))
    {
        var dado = new Dado(inputInt);
        var array = Controller.generaLanci(dado.numeroLanci);
        Controller.printArray(array);
        System.Console.WriteLine("la media è " + Controller.average(array));
        status = true;
    }
    else
    {
        System.Console.WriteLine("Valore inserito non valido");
    }

} while (status == true) ;
```

3. Creazione del modello (classe Dado)

```
namespace dado

{
    public class Dado
    {
        public int numeroLanci {get; set; }

        public Dado(int numeroLanci){
            this.numeroLanci = numeroLanci;
        }

    }
}
```

4. Per questa lezione è tutto.











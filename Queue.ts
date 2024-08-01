/*

Conception d'une File (Queue) en TypeScript


Dans cet exercice, vous allez explorer le concept de file (queue) en programmation en concevant une implémentation basique 
d'une file en TypeScript. La File est une structure de données linéaire qui obéit à la règle du "premier entré, premier sorti" 
(FIFO - First In, First Out).

Objectif de l'exercice :

On va donc créer une classe Queue qui représente une File en utilisant une LinkedList. 
Cette File doit être capable d'effectuer les opérations de base d'une file, 
- enqueue() pour ajouter un élément à l'arrière de la file
- dequeue() pour supprimer un élément à l'avant de la file
- isEmpty() pour vérifier si la file est vide
- peek() pour voir l'élément à l'avant de la file sans le supprimer.


*/

class QueueNod<T> {
}

class Queu<T> {
    private front: QueueNode<T> | undefined;
    private rear: QueueNode<T> | undefined;

    constructor() {
        this.front = undefined;
        this.rear = undefined;
    }

    // Ajoute un nouvel élément à l'arrière de la file
    enqueue(value: T): void {
    }

    // Supprime et retourne l'élément à l'avant de la file
    dequeue(): T | undefined {
        return undefined;
    }

    // Vérifie si la file est vide
    isEmpty(): boolean {
        return true;
    }

    // Retourne l'élément à l'avant de la file sans le supprimer
    peek(): T | undefined {
        return undefined;
    }

    // Affiche les éléments de la file
    display(): string {
        let res : string = "";
        return res;
    }
}

// Exemple d'utilisation :
const queu = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueue:");
console.log(queue.display()); // Output: 10, 20, 30

console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue after dequeue:");
console.log(queue.display()); // Output: 20, 30

console.log("Front element:", queue.peek()); // Output: 20

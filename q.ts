class QueueNode<T> {
    value: T;
    next: QueueNode<T> | undefined;
    constructor(value: T) {
        this.value = value;
        this.next = undefined;
    }
}

class Queue<T> {
    private front: QueueNode<T> | undefined;
    private rear: QueueNode<T> | undefined;

    constructor() {
        this.front = undefined;
        this.rear = undefined;
    }

    // Ajoute un nouvel élément à l'arrière de la file
    enqueue(value: T): void {
        const newQueue = new QueueNode(value);
        if (this.front == undefined) {
            this.rear = newQueue;
            this.front = newQueue;
        } else if(this.rear !== undefined) {
            this.rear.next = newQueue;
            this.rear = newQueue;
        }
    }
    
    // Supprime et retourne l'élément à l'avant de la file
    dequeue(): T | undefined {
        if (this.front!=undefined) {
        const value = this.front.value;
        this.front = this.front.next;
        if (this.front!=undefined) {
            this.rear = undefined;
        }
        return value;
    }
    }

    // Vérifie si la file est vide
    isEmpty(): boolean {
        return this.rear===undefined;
    }

    // Retourne l'élément à l'avant de la file sans le supprimer
    peek(): T | undefined {
        if (this.front !== undefined) {
            return this.front.value;
        } else {
            return undefined;
        }
    }

    // Affiche les éléments de la file
    display(): string {
        let res: string = "";
        let current: QueueNode<T> | undefined = this.front;
        while (current !== undefined) {
            if (current.next !== undefined) {
                res += current.value + ("  ");
            }
            else {
                res += current.value
            }  
            current = current.next;
        }
        return res;
    }
}

// Exemple d'utilisation :
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueue:");
console.log(queue.display()); // Output: 10, 20, 30

console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue after dequeue:");
console.log(queue.display()); // Output: 20, 30

console.log("Front element:", queue.peek()); // Output: 20

let items: Array<{element: string, priority: number}> = [];

// If the queue is not empty,
// this will remove the highest-priority element
// from the queue and returns it.
function dequeue () {
    if (!isEmpty()) return items.shift();
}

function enqueue(element: string, priority: number): void {
    let qElement: {element: string, priority: number} = {element, priority};
    let contain = false;

    // iterating through the entire item array to add element at the
    // correct location of the queue
    for (let i = 0; i < items.length; i++) {
        if (items[i].priority > qElement.priority) {
            items.splice(i, 0, qElement);
            contain = true;
            break;
        }
    }

    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) items.push(qElement);    
}

// If the queue is not empty,
// this will return the highest priority element
// in the queue without removing it.
function front() {
    if (!isEmpty()) return items[0];
}

function isEmpty(): boolean {
    return items.length === 0;
}

function print(): string {
    let str = "";

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        str += item.element + " :" + item.priority + "\n";
    }

    return str;
}

// If the queue is not empty,
// this will return the lowest priority element
// in the queue without removing it.
function rear() {
    if (!isEmpty()) return items[items.length - 1];
}

export default {
    dequeue,
    enqueue,
    front,
    isEmpty,
    print,
    rear
}
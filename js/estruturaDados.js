// Stack, pilha - LIFO (last in, first out) // 

/*
> Basic operations of a stack
> - Push: Add an element to the top of a stack
> - Pop: Remove an element from the top of a stack
> - IsEmpty: Check if the stack is empty
> - IsFull: Check if the stack is full
> - Peek: Get the value of the top element without removing it
*/

var myStack = [];

function myPush(element, stack) {
  var length = stack.length;
  stack[length] = element;
  console.log(`Added ${element} to position ${length} of stack, see: ${myStack}`);
};

/* 
// Test function myStack:
myPush("banana", myStack);
*/

// Queue, fila

// List, lista

// Array, vetor 

class anArray {
  constructor(...elements) {
    this.elements = [ elements ];
  };
  
}

var newArray = new anArray(1, 2, 3, 4, 5);

console.log(newArray);
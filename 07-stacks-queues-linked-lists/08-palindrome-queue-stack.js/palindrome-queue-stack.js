const Queue = require('./queue');
const Stack = require('./stack');

const isPalindromeQueueStack = (str) => {
    const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const charQueue = new Queue();
    const charStack = new Stack();

    for (let i = 0; i < formattedStr.length; i++) {
        const char = formattedStr.charAt(i);
        charQueue.enqueue(char);

        // Stack will automatically reverse
        charStack.push(char);
    }

    while (!charQueue.isEmpty()) {
        // If the string not reversed in the FIFO queue is not equal to the reversed Stack...

        // Not a palindrome!
        if (charQueue.dequeue() !== charStack.pop()) {
            return false;
        }
    }

    return true;

};

module.exports = isPalindromeQueueStack;
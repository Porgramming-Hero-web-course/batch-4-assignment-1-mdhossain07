"use strict";
const countWordOccurrences = (sentence, word) => {
    let counter = 0;
    const splittedSentence = sentence.split(' ');
    for (let item of splittedSentence) {
        if (item.toLowerCase() === word.toLowerCase()) {
            counter++;
        }
    }
    return counter;
};
countWordOccurrences("I love typescript", "typescript");

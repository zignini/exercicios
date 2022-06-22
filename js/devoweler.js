// To-do: incluir vogais com acento (diacríticos)

function devoweler(voweled) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let vowel of vowels) {
        voweled = voweled.replaceAll(vowel, "");
    };
    return voweled;
};

const aString = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(aString);

const strng = devoweler(aString);

console.log(strng);

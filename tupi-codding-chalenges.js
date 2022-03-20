// https://www.youtube.com/watch?v=yG03EvfHSIU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA

// 1st one
// return the longest word in data string
// - Break the string in an array of words
// - Compare for the bigger length

function returnLongestWord(phrase) {
    const arrayOfWords = phrase.split(" ");
    let longestWord = "";
    arrayOfWords.forEach(word => {
        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord
}

console.log(returnLongestWord('ola meu nome é Rafael'))


// MATH sequences
// array with a set of numbers, and we got to look for an aritmetic pattern or geomatric pattern
// if there is no pattern it should return -1

// 3 9 27
// 9/3 = 3
// 27/9 = 3

// Solving
// aritmeticDifference = number[1] - number[0]
// the artimeticDifference must be true for all the array elements to have a pattern
// the geometricCoefficient  = number[1]/number[0]
function getPattern(numbers) {

    const arithmeticCoefficient = numbers[1] - numbers[0];
    const geometricCoefficient = numbers[1] / numbers[0];

    let hasArithmeticPattern = true;
    let hasGeometricPattern = true;

    for (let x = 1; x < (numbers.length - 1); x++) {
        const difference = hasArithmeticPattern ? numbers[x + 1] - numbers[x] : -1;
        const division = numbers[x + 1] / numbers[x];
        if (difference != arithmeticCoefficient && hasArithmeticPattern) {
            hasArithmeticPattern = false
        }
        if (division != geometricCoefficient && hasGeometricPattern) {
            hasGeometricPattern = false
        }
        if (!hasArithmeticPattern && !hasGeometricPattern) {
            return -1;
        }
    }
    if (hasArithmeticPattern) {
        return 'it has Arithmetic Pattern: ' + arithmeticCoefficient.toString();
    }
    if (hasGeometricPattern) {

        return 'it has Geo Pattern: ' + geometricCoefficient.toString();

    }
}

console.log(getPattern([0, 2, 4, 6, 8, 10]))
console.log(getPattern([0, 2, 4, 6, 8, 9]))
console.log(getPattern([3, 9, 27, 81]))
console.log(getPattern([3, 9, 27, 82]))
console.log(getPattern([2, 4]))



//capitalize every word on the string
// split the string into an array of words
function capitalize(str) {
    let arrOfWords = str.split(' ');
    arrOfWords = arrOfWords.map(word => {
        const firstLetter = word.charAt(0);
        const firstLetterCapitalized = firstLetter.toUpperCase();
        return word.replace(firstLetter, firstLetterCapitalized)
    });
    return arrOfWords.join(" ");
}

console.log(capitalize('olá meu nome é rrafael'));


// unique Values

function hasUniqueWords(str) {
    const arrOfWords = str.split("");
    let setOfWords = new Set();

    arrOfWords.forEach(word => setOfWords.add(word))

    return arrOfWords.length == setOfWords.size ? true : false;
}

console.log(hasUniqueWords('abc'));
console.log(hasUniqueWords('Alo nao repeti nenhuma nao'));

function hasUniqueWordsWithoutSet(str) {
    const arrOfWords = str.split("");

    for (word of arrOfWords) {
        const aux = str.replace(word, '').split("");
        if (aux.find(s => s === word)) {
            return false;
        }
    }
    return true
}

console.log(hasUniqueWordsWithoutSet('abc'));
console.log(hasUniqueWordsWithoutSet('abcdefgza'));


// check if the last number of an array, is the sum of all the other values
// so we got to remove the last number of the array
// then

function checkIfLastNumberIsTotal(arr) {
    const newArr = arr.splice(0, arr.length - 1);
    const total = newArr.reduce((total, number) => total += number, 0)
    return total === arr[arr.length - 1] ? true : false;
}

console.log(checkIfLastNumberIsTotal([1, 1, 2]));


function checkIfLargestNumberIsTotal(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const biggest = sorted.pop();
    const total = sorted.reduce((total, number) => total += number, 0);
    return total === biggest ? true : false;
}

console.log(checkIfLargestNumberIsTotal([1, 1, 2]));
console.log(checkIfLargestNumberIsTotal([1, 1, 4]));


// unique company
// { title, company };
function getCompanies(products) {
    products = products.sort((a, b) => a.company - b.company);
    return [...new Set(products.map(product => product.company))];
}

console.log(getCompanies([
    {
        title: "poco",
        company: "Xiaomi"
    },
    {
        title: "z7",
        company: "Motorolla"
    },
    {
        title: "miNote",
        company: "Xiaomi"
    },
    {
        title: "Mi10",
        company: "Xiaomi"
    },
    {
        title: "Mi10",
        company: "Apple"
    },
    {
        title: "Tropic",
        company: "Adidas"
    },
    {
        title: "Kokphon",
        company: "Nokia"
    },
]))


// what is the word with most repeated letters
// how that would work?
function getWordWMostRepeatedLetters(str) {
    const arrOfWords = str.split(" ");
    let mostRepeatedWord = "";
    let maxRepetition = 0;

    arrOfWords.forEach(word => {
        let arrOfLetters = word.toLowerCase().split("");
        arrOfLetters.sort();
        count = 1;
        for (let x = 1; x < arrOfLetters.length; x++) {
            if (arrOfLetters[x] === arrOfLetters[x - 1]) {
                count += 1;
            } else {
                count = 1;
            }
            if (count > maxRepetition) {
                mostRepeatedWord = word;
                maxRepetition = count;
            }
        }
    })
    return mostRepeatedWord;
}

console.log(getWordWMostRepeatedLetters("Javascript is the greatest programming language  "));


// return the second lowest and bigger value
function returnSecond(arr) {
    arr.sort((a, b) => a - b);
    arr = [...new Set(arr)];
    return [arr[1], arr[arr.length - 2]];
}

console.log(returnSecond([3, 2, 88, 3, -11, 67, 7]))
console.log(returnSecond([11, 44, 22]))
console.log(returnSecond([4, 2]))



//
//

function countLetters2(str) {
    str = str.replaceAll(' ', '');
    str = str.toLowerCase().split('');
    str.sort();
    let counter = 1;
    let newArr = [];
    for (let x = 1; x <= str.length; x++) {
        if (str[x] != str[x - 1]) {
            newArr.push(counter);
            newArr.push(str[x - 1]);
            counter = 1;
        } else {
            counter += 1;
        }
    }
    return newArr.join();
}

console.log(countLetters2('fffeerttttooo'));
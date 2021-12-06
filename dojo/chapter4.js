// Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
const removeBlanks = str => {
    let arr = str.split(" ");
    return arr.join("");
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));



// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 01357924680.
const getDigits = str => {
    let num = ["0","1","2","3","4","5","6","7","8","9"];
    let output = [];
    for(let i = 0; i < str.length; i++) {
        if(num.includes(str[i])) {
            output.push(parseInt(str[i]));
        }
    }
    return output.join("");
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));



// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".
const acronyms = str => {
    let arr = str.split(" ");
    let newStr = "";
    // console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i][0].toUpperCase())
        newStr += arr[i][0].toUpperCase();
    }
    return newStr;
}
console.log(acronyms("there's no free lunch - gotta pay yer way."));
console.log(acronyms("Live from New York, it's Saturday Night!"));



// Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
const countNonSpaces = str => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            continue;
        }
        count++;
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));



// Given a string array and value (length), remove any strings shorter than length from the array.
const removeShorterStrings = (arr, length) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length <= length) {
            arr.splice(i, 1);
            i--;
        }
    }return arr;
}
console.log(removeShorterStrings(["hello", "world", "this", "is", "NYC", "good", "morning", "new", "yokers"],4));



// Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
const stringReverse = str => {
    let output = "";
    for(let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}
console.log(stringReverse("creature"))

const stringReverse2 = str => {
    let arr = str.split("");
    for(let i = 0; i < arr.length/2; i++) {
        let j = arr.length - 1 - i;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr.join("");
}
console.log(stringReverse2("creature"))



// Build a standalone function to remove strings of even lengths from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!"," (instead","of","Chris","with","C)","."], change that same array to ["Nope !","Its","Chris","."].
const removeEvenLengthStrings = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]. length % 2 === 0) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(removeEvenLengthStrings(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));



// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
const intToRomanNum = num => {
    // roman character object
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    // variable to hold output string
    let str = "";
    // for loop the roman character object
    for(const key in roman) {
        // console.log(key);
        // divide the num with each roman obj key, and find the floor
        let q = Math.floor(num / roman[key]);
        // subtract it from given num, so we get the num different
        num -= q * roman[key];
        // if q for example is 2, then we repeat key 2 times, and concat. into output string
        str += key.repeat(q);
    }
    return str;
}
console.log(intToRomanNum(4));
console.log(intToRomanNum(349));
console.log(intToRomanNum(444));



// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, its wooden frame features 2000 characters. Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.
const romanNumToInt = str => {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let num = 0;
    // for loop the str input
    for(let i = 0; i < str.length; i++) {
        // set current and next value as current = str[i] roman character and next = str[i+1] roman character
        const curr = roman[str[i]];
        const next = roman[str[i+1]];
        console.log("current", curr)
        console.log("next: ", next)
        // if current < next, which means we can subtract (because we have some code to get XL is 40, curr = 10, next is 50, so we subtract first, then add), else add
        curr < next ? num -= curr : num += curr;
    }
    return num;
}
// console.log(romanNumToInt("III"));
console.log(romanNumToInt("DCIX"));
console.log(romanNumToInt("MXDII"));


// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
const parensValid = str => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            arr.push(str[i]);
        } else if(str[i] === ")" && arr[arr.length-1] === "(") {
            arr.pop();
        } else if(str[i] === ")") {
            return false;
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parensValid("Y(3(p)p(3)r)s"));  // true;
console.log(parensValid("N(0(p)3"));  // false;
console.log(parensValid("N(0)t )0(k"));  // false;

const parensValid2 = str => {
    let obj = {"(" : 0};
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            obj["("] ++;
        } else if(str[i] === ")") {
            obj["("] --;
        }
        if(obj["("] < 0) {
            return false;
        }
    }
    if(obj["("] === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(parensValid2("Y(3(p)p(3)r)s"));  // true;
console.log(parensValid2("N(0(p)3"));  // false;
console.log(parensValid2("N(0)t )0(k"));  // false;



// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.
const bracesValid = str => {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(" || str[i] === "{" || str[i] === "[") {
            arr.push(str[i]);
        } else if(str[i] === ")" && arr[arr.length -1 ] === "(") {
            arr.pop();
        } else if(str[i] === "}" && arr[arr.length -1 ] === "{") {
            arr.pop();
        }else if(str[i] === "]" && arr[arr.length -1 ] === "[") {
            arr.pop();
        } else if(str[i] === ")" || str[i] === "}" || str[i] === "]") {
            return false;
        }
    }
    if(arr.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));  // true
console.log(bracesValid("D(i{a}l[ t]o)n{e"));    // false
console.log(bracesValid("A(1)s[O (n]0{t) 0}k"));    // false

const bracesValid2 = str => {
    let obj = {
        "(" : 0,
        "[" : 0,
        "{" : 0,
    };
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "(") {
            obj["("]++;
        } else if(str[i] === "[") {
            obj["["]++;
        } else if(str[i] === "{") {
            obj["{"]++;
        } else if(str[i] === ")") {
            obj["("]--;
        } else if(str[i] === "]") {
            obj["["]--;
        } else if(str[i] === "}") {
            obj["{"]--;
        }
        if(obj["("] < 0 || obj["["] < 0 || obj["{"] < 0) {
            return true;
        }
    }
    if(obj["("] === 0 && obj["["] === 0 && obj["{"] === 0) {
        return true;
    } else {
        return false;
    }
    console.log(obj);
}
console.log(bracesValid2("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"));  // true
console.log(bracesValid2("D(i{a}l[ t]o)n{e"));    // false
// need to consider edge case
console.log(bracesValid2("A(1)s[O (n]0{t) 0}k"));    // false



// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false
const isPalindrome = str => {
    for(let i = 0; i < str.length / 2; i++) {
        let j = str.length - 1 - i;
        if(str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome("a x a")); // true
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Dud")); // false
// console.log(isPalindrome("oho!")); // false



// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u". Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.
// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".
const longerestPalindrome = str => {
    let output = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(isPalindrome(str.slice(i, j)) && str.slice(i, j).match(/[a-z]/)) {
                if(str.slice(i, j).length > output.length) {
                    output = str.slice(i, j);
                }
            }
        }
    }
    return output;
}
// console.log(longerestPalindrome("what up, daddy-o?"))   // dad
// console.log(longerestPalindrome("uh... not much"))   // u
// console.log(longerestPalindrome("Yikes! my favorite racecar erupted!"))   // e racecar e

const longerestPalindrome2 = str => {
    str = str.toLowerCase().split("");
    let arr = ["!", ".", ","];
    for(let i = 0; i < str.length; i++) {
        if(arr.includes(str[i]) || str[i] === " ") {
            str.splice(i, 1);
        }
    }
    str = str.join("");
    let output = "";
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) {
            if(isPalindrome(str.slice(i, j)) && str.slice(i, j).match(/[a-z]/)) {
                if(str.slice(i, j).length > output.length) {
                    output = str.slice(i, j);
                }
            }
        }
    }
    return output;
}
console.log(longerestPalindrome2("H,ot p.uree eruption!"))   // tpureeerupt
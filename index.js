// Initial value of cats
let cats = ["Milo", "Otis", "Garfield"];

// 1) Function to destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 2) Function to destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 3) Function to destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 4) Function to append a cat to the cats array and return a new array
function appendCat(name) {
    return [...cats, name]; 
}

// 5) Function to prepend a cat to the cats array and return a new array
function prependCat(name) {
    return [name, ...cats];
}

// 6) Function to remove the last cat and return a new array
function removeLastCat() {
    return cats.slice(0, -1);
}

// 7) Function to remove the first cat and return a new array
function removeFirstCat() {
    return cats.slice(1);
}

// 8) Function to destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}




// new RegExp

// const pattern = 'hello';
// const regex = new RegExp(pattern, 'i');
// console.log(regex.test(pattern));

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* const input = ".*";
const safePattern = escapeRegExp(input); // becomes \.\*
const regex = new RegExp(safePattern); // now it matches literal ".*"
console.log(regex); */

/* function search(input, text) {
  const escaped = escapeRegExp(input);
  const regex = new RegExp(escaped, "gi");
  return text.match(regex);
}

console.log(search("g", "Hello user. Welcome user1."));   */
// returns: ["user."]

/* const str = 'word ako';

const regex = new RegExp(str, 'gi');
console.log(regex.test('ako')) */

/* function searchKeyword(text, keyword) {
  const regex = new RegExp(keyword, 'gi');
  return text.match(regex);
}

console.log(searchKeyword('hello world, ako ito world mama mo world', 'world')) */

// const word = '\\w';
// const regex = new RegExp(word);
// const getChars = word.match(regex);
// // console.log(regex.test('nelrnlwenr'))
// console.log()
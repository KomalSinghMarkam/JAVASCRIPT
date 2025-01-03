const name = "komal"
const repoCount = 50
// console.log(name + repocount + "values");


console.log(`hello my name name is ${name} and my repo count is ${repoCount}`);

const gamename = new String("komal-singh-markam")
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('a'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(2,6)
console.log(anotherString);

const newstringone = "   komal   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://komal.com/hero%singh"
console.log(url.replace('%','-'));

console.log(url.includes('komal'));
console.log(gamename.split('-'));








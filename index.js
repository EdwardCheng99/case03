// 因為網路上找的用npm裝入的uniq模組是十年前的，比較舊，用CJS寫法
// https://www.npmjs.com/search?q=uniq
// npm i uniq 安裝uniq模組
// npm i 如果不小心將安裝的模組套件檔案刪除了，使用此則會全數裝回1
const uniq = require("uniq");
const ary = [1, 3, 3, 5, 7, 9, 9, 9, 9];
const result = uniq(ary);
console.log(result);//[ 1, 3, 5, 7, 9 ]
console.log(process.argv[2]);


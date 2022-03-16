// const chalk = require("chalk");
// console.log(chalk.blue("Hello World"));

const validator = require("validator");
const res = validator.isEmail("abc@abc.com")
console.log(res);
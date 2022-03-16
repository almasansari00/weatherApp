const path = require("path");
console.log(path.dirname("E:/NODEJS/Path\Module/index.js"));
const myPath= path.parse("E:/NODEJS/Path\Module/index.js");
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.ext);
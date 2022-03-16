const fs= require('fs');
const bioData={
  name:'almas',
  age:32,
  tech:"ReactJS"
}

const jsonData = JSON.stringify(bioData)
fs.writeFile("data.json",jsonData,()=>{
  console.log("done");
});

fs.readFile("data.json","utf-8",(err,data)=>{
  const objData=  JSON.parse(data);
  console.log(objData);
})
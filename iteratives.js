let json = [{
    
    "name": "Vishnu vardhan M",
    "email": "vishnuvardhan481999@gmail.com",
    "phone": 8124250027,
    "degree": "B.E",
    "branch":"Mech",


}];


// for loop

for(let i = 0;i<json.length;i++)
{
var obj = json[i];

console.log(obj.name);
console.log(obj.email);
console.log(obj.phone);
console.log(obj.degree);
console.log(obj.branch);
}



// for Each
console.log("-----------------forEach--------------------")
json.forEach(json=>
{
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.degree);
    console.log(obj.branch);
}
)


// for Of
console.log("-----------------forOf----------------------")

for(values of json)
{
console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.degree);
    console.log(obj.branch);
}


//for in

console.log("-----------------forin----------------------")
for(values in json)
{
console.log(obj.name);
console.log(obj.email);
console.log(obj.phone);
console.log(obj.degree);
console.log(obj.branch); 
}

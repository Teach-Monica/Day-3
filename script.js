Assignment Day-3:

Question No-1:

Create a JSON object and iterate over using all for loops.

Answer:

//Creating a simple array of object in JSON format-
let obj=[
 {   
    person:"Name 1",
    age:"2",
    company:"Guvi"
 },
 {
    person:"Name 2",
    age:"7",
    company:"Guvi Geek"
 },
 {
    person:"Name 3",
    age:"10",
    company:"Guvi Geek Networks"
 }
]
//iterating through the data with the help of for loop-
for(let i=0; i<obj.length; i++){
    console.log(`Name:${obj[i].person},
    Age:${obj[i].age},
    Company:${obj[i].company}`)
}

//iterating through the data with the help of ForEach loop(uses callback function)-
obj.forEach(emp=>{
    console.log(`Name:${emp.person},
    Age:${emp.age},
    Company:${emp.company}`)
})

//iterating through the data with the help of For in loop(it iterate over index rather than data)-
for(const key in obj){
    console.log(`Name:${obj[key].person},
    Age:${obj[key].age},
    Company:${obj[key].company}`)
}

//iterating through the data with the help of For in loop(it iterate over index rather than data)-
for(const emp of obj){
    console.log(`Name:${emp.person},
    Age:${emp.age},
    Company:${emp.company},`)
}

//Output-

// Name:Name 1,
// Age:2,
// Company:Guvi
// Name:Name 2,
// Age:7,
// Company:Guvi Geek
// Name:Name 3,
// Age:10,
// Company:Guvi Geek Networks

Question No-2:

//create your own resume data in JSON format -

//creating an object with name resumeData
var resumeData = {
    "name": "Monica Patel",
    "age": 23,
    "email":"monica.krpatel2gmail,com",
    "description": "Software Developer",
    "location": "Bangalore",
    "skills":{
        "javaScript":"Begginer",
        "nodeJs":"Begginer",
        "html":"Advanced",
        "css":"Advanced"
		},
    "hobbies": ["reading","writing","sports"]
    }
	
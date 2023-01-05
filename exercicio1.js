let weight;

console.log(typeof weight);

let streamer = {
    name: "Juninho",
    age: 23,
    stars: 100.100,
    isSubscribed: true
}

let youtuber = {
    name: "YTB",
    age: 23,
    stars: 100.111,
    isSubscribed: true
}

console.log(`${streamer.name} tem ${streamer.age} 
anos de idade e possui ${streamer.stars} inscritos. 
Você é inscrito dele? ${streamer.isSubscribed}`)

students = [
    streamer,
]

students[1] = youtuber
console.log(students)
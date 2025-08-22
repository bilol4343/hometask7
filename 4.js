function afterNYears(people,n){
    let result = {}
    let years = Math.abs(n)
    for (let person in people){
        result[person] = Number(people[person]) + years
    }
    return result
}
console.log(afterNYears({
     "Joel" : 32,
     "Fred" : 44,
     "Reginald" : 65,
     "Susan" : 33, 
     "Julian" : 13
} ,1));
function check(str){
    let words = str.split (" ")
        
    return words.every(word => {
        let word1 = words[0]
        return word1 === word1.toUpperCase()
    })
    
}
console.log(check("A Mind Boggling Achievement"));
console.log(check("why we are living"));
function sortprice(drinks){
    return drinks.sort((a,b) => b.price - a.price);
}
const drinks = [
    {name: "Lemonade", price: 50},
    {name: "Lime", price: 10}
];
const sortedprice = sortprice(drinks);
console.log(sortedprice);
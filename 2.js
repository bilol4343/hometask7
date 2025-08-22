function task2(obj){
    return Object.entries(obj);
}
console.log(task2({
    A: 1,
    B: 2,
    C: 3
}));
console.log(task2({
    likes : 2,
    dislikes : 3,
    followers : 10
}));
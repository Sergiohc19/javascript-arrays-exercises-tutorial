let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

function string(item) {

    if(item === 0) {
    return "woko"
    }else {
    return "wiki"
}
}
// Your code here
let newArray = theBools.map(string)
console.log(newArray)
let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let array = [];
// Your code here
for (let i = 0; i < mix.length; i++) {
    array.push(typeof mix[i])
}
console.log(array)
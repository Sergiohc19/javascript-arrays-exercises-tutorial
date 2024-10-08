let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here

function mergeTwoList(arr) {

    let odd = [];
    let even = [];

    for(let i = 0; i < arr.length; i++) {

       

        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }

    };
    return odd.concat(even)
}
console.log(mergeTwoList(listOfNumbers))

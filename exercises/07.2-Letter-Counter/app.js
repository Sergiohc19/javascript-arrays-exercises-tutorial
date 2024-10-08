let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (let letter of par.toLowerCase()) {
    if(letter !== " "){ 
    counts[letter] = (counts[letter] || 0) + 1
    }
}

console.log(counts);

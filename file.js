// fs = file system
const fs = require ("fs");
// const os = require("os");

// console.log(os.cpus().length)

// fs.writeFileSync('./test.txt', 'hey there!');
// fs.writeFile("./test.txt", "hello world", (err) => {
//     if (err) {
//         console.log("error is : ", err);
//     } else {
//         console.log("file created successfully");
//     }
// });

// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("error is : ", err);
//     } else {
//         console.log("file read successfully : ", result);
//     }
// });


// fs.appendFileSync('./test.txt',  `${Date.now()} hello world\n`);
// fs.cpSync("./test.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt").isFile());
// fs.mkdirSync("my-docs/a/b" , { recursive: true });    

// blocking

// console.log("1");
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// console.log("2");

//non-blocking

console.log("1");
fs.readFile("contacts.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});

console.log("2");
console.log("3");
console.log("4");
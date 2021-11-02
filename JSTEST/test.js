const test = ["hoge", "fuga", "puni"]
const testFunc = () => {
    return "puni"
}
console.log(test.map((test) => {
    testFunc()
}));
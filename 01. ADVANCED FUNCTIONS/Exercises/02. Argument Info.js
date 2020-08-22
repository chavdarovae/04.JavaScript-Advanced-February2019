function solve() {
    let summary = {};
    for (let obj of arguments) {
        let currType = typeof (obj);
        console.log(`${currType}: ${obj}`);

        if (!summary[currType]) {
            summary[currType] = 1;
        } else {
            summary[currType]++;
        }
    }
    let sortedSummary = Object.entries(summary)
        .sort((a, b) => b[1] - a[1])
        .forEach(x=>console.log(`${x[0]} = ${x[1]} `))   
}

solve('cat', 'dog', 42, 34, function () { console.log('Hello world!'); }, [2, 5, 78], 56)
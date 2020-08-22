function solve(arr) {
    let stringCollection = '';
    function addString(str) {
        return stringCollection !== '' ? stringCollection += '|' + str : stringCollection += str;
    }
    function removeString(str) {
        return stringCollection=stringCollection.split(str).join(' ');
    }
    function printString() {
        return stringCollection=stringCollection.split('|').filter(x=>x!==' ').join(',');
    }

    let obj={
        add: addString,
        remove: removeString,
        print: printString
    }

    arr.forEach(line => {
        line.includes(' ')?obj[line.split(' ')[0]](line.split(' ')[1]):console.log(obj[line]());
    });
}

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])
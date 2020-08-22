function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }        
    }

    let personArr=[];
    let input = [
        'Maria Petrova 22 mp@yahoo.com',
        'SoftUni',
        'Stephan Nikolov 25',
        'Peter Kolev 24 ptr@gmail.com'
    ];

    for(let line of input){
        let info=line.split(' ').map(x=>isNaN(x)?x:+x);
        let currPerson=new Person(...info);
        personArr.push(currPerson);
    }
    return personArr;
}

console.log(getPersons());
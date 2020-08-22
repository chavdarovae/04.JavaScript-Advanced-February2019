class Rat {
    constructor(name) {
        this.name = name;
        this.ratCollection = [];
    }

    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.ratCollection.push(otherRat)
        }        
    }

    getRats() {
        return this.ratCollection;
    }

    toString() {
        let output=`${this.name}\n`
        for (let rat of this.ratCollection) {
            output+=`##${rat.name}\n`
        }
        return output;
    }   
}

let test = new Rat('Georgi');
let test1 = new Rat('Miro');
let test2 = new Rat('Slavi');
test.unite(test2)
test.unite(test1)

console.log(test.toString());
console.log(test.getRats());
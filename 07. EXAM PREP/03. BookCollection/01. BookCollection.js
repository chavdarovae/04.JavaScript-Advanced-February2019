class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;//String
        this.room = room; //String
        this.shelfCapacity = shelfCapacity; //Number
        this.shelf = []; //an array
        return this;
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (["livingRoom", "bedRoom", "closet"].includes(value)) {
            this._room = value;
        } else {
            throw `Cannot have book shelf in ${value}`;
        }
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = { bookName, bookAuthor, genre };
        if (this.shelf.length >= this.shelfCapacity) {
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf.filter(b => b.bookName !== bookName);
        return this;
    }

    showBooks(genre) {
        let result = `Results for search "${genre}":\n`;
        result += this.shelf
            .filter(b => b.genre === genre)
            .map(b => `\uD83D\uDCD6 ${b.bookAuthor} - "${b.bookName}"`)
            .join('\n');
        return result.trim();
    }

    toString() {
        if (this.shelf.length < 1) {
            return "It's an empty shelf";
        } else {
            let result = `"${this.shelfGenre}" shelf in ${this._room} contains:\n`;
            result += this.shelf
                            .map(b => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
                            .join('\n');
            return result.trim();
        }
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
console.log(livingRoom.shelfCondition);
console.log(livingRoom.toString());
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
console.log(livingRoom.shelfCondition);
console.log(livingRoom.toString());
livingRoom.addBook("Introduction to Programming with Java", "Svetlin Nakov")
console.log(livingRoom.shelfCondition);
console.log(livingRoom.toString());
livingRoom.addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.shelfCondition);
console.log(livingRoom.toString());

function solve() {
    let sortedList = (function sortedList() {
        let collection = [];
        let size = 0;

        let addElement = function (n) {
            collection.push(n);
            this.size++;
            return collection = collection.sort((a, b) => a - b);
        }

        let removeElement = function (index) {
            validateIndex(index);
            this.size--;
            return collection.splice(index, 1);
        }

        let getElement = function (index) {
            validateIndex(index);
            return collection[index];
        }

        let validateIndex = function (index) {
            if (index < 0 || collection.length - 1 < index) {
                throw new RangeError('The index points outside of the array!')
            }
        }

        return {
            size: size,
            add: addElement,
            remove: removeElement,
            get: getElement,
        }
    })();
    return sortedList;
}

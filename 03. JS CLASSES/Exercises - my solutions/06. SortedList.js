class SortedList {
    constructor(){
        this.listNumbers=[];
        this.size=this.listNumbers.length;
    }

    add(element){
        this.listNumbers.push(element);
        this.listNumbers=this.listNumbers.sort((a,b)=>a-b);
        this.size=this.listNumbers.length;
    }

    remove(index){
        if(index<0 || index>this.listNumbers.length-1){
            throw Error('Invalid index!')
        }
        this.listNumbers.splice(index,1);
        this.size=this.listNumbers.length;
    }

    get(index){
        if(index<0 || index>this.listNumbers.length-1){
            throw Error('Invalid index!')
        }
        return this.listNumbers[index];
    } 
}


let numberArr = new SortedList();
numberArr.add(5);
numberArr.add(3);
numberArr.remove(0);
console.log(numberArr.size);



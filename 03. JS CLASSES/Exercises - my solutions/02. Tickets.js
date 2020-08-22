function manageTickets(arr, sortingCrit) {
    let ticketArr=[];
    class Ticket{
        constructor(destination, price, status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    for (let line of arr) {
        line=line.split('|').map(x=>isNaN(x)?x:+x);
        let currTicket=new Ticket(...line);
        ticketArr.push(currTicket);
    }
    
    let sortedArr=[];
    
    if(sortingCrit!=='price'){
        sortedArr=ticketArr.sort((a,b)=>a[sortingCrit].localeCompare(b[sortingCrit]));
    }else{
        sortedArr=ticketArr.sort((a,b)=>a[sortingCrit]-b[sortingCrit]);
    }
        
    return     sortedArr;
}

console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price'
));

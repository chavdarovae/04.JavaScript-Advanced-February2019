function solve() {
    let myObj={
        extend: function(template){
           let entries=Object.entries(template); 
           for (const [key,value] of entries) {
               if(typeof value==='function'){
                   Object.getPrototypeOf(this)[key]=value;
               }else{
                  this[key]=value; 
               }
           }
        }
    };
    return myObj;
}

let obj=solve();
obj.extend({
    name:'emi',
    age: function(){
        console.log(`23 ako sum v dobro nastroenie`);
    }
})
obj.age()
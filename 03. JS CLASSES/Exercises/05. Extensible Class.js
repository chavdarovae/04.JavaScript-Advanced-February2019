(function () {
    let id = 0;

    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
           let source={};
           let additionalFunc= Object.entries(template).filter(kvp => typeof(kvp[1])==='function');
           additionalFunc.forEach(kvp=>source.__proto__[kvp[0]]=kvp[1])

           let additionalProp= Object.entries(template).filter(kvp => typeof(kvp[1])!=='function');
           additionalProp.forEach(kvp=>source[kvp[0]]=kvp[1]);
           
           Object.assign(this,source);
        }
    }  

    return Extensible;
})();





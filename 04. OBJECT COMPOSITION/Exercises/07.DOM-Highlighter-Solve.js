function solve(selector) {
    const htmlElement = document.querySelector(selector);
    htmlElement.classList.add('highlight');
    let childDepthArr=[];

    findDeepestElement(htmlElement);

    function findDeepestElement(element){
        const children = Array.from(element.children);        
        if(children.length===0){
            return;
        }else{
            children.forEach(x=>{
                let depth=0;
                let currElement=x;
                while(currElement!==htmlElement){
                    depth++;
                    currElement=currElement.parentNode;
                }
                childDepthArr.push({child:x, childDepth:depth})
               console.log({child:x, childDepth:depth});
            })
            children.forEach(x=>{
                findDeepestElement(x);
            })
        }
    }

    let deepestElement=childDepthArr.sort((a,b)=>b.childDepth-a.childDepth,0)[0].child;
    console.log(deepestElement);
    
    while(deepestElement!==htmlElement){
        deepestElement.classList.add('highlight');
        deepestElement=deepestElement.parentNode;
    } 
}
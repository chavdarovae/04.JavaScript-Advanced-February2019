let manager = (function () {
    const ingredientObj = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    const recipesObj = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'coke': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'omelet': { protein: 5, fat: 1, flavour: 1 },
        'cheverme': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const prepareRecipe = (recipe, necessaryQuantity) => {
        const necessaryIngredients = Object.entries(recipesObj[recipe]);
        for (const [ingr, qty] of necessaryIngredients) {
            const ingredientSored = ingredientObj[ingr] * necessaryQuantity;
            if (qty > ingredientSored) {
                return `Error: not enough ${ingr} in stock`
            }
        }

        for (const [ingr, qty] of necessaryIngredients) {
            ingredientObj[ingr] -= necessaryQuantity * qty;
        }

        return 'Success'
    }

    return function (input) {
        const tokens = input.split(' ');
        const command = tokens[0];
        switch (command) {
            case 'restock':
                ingredientObj[tokens[1]] += Number(tokens[2]);
                return 'Success'
            case 'prepare':
                return prepareRecipe(tokens[1], Number(tokens[2]))
            case 'report':
                return Object.entries(ingredientObj)
                    .map((kvp)=>`${kvp[0]}=${kvp[1]}`)
                    .join(' ');
        }
    }
})()



console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

function addProduct() {
    let $product = $('input[type="text"]');
    let $price = $('input[type="number"]');
    let $tableBody = $('#product-list');
    let $totalPrice = $('#bill tfoot tr td:nth-child(2)');


    if ($product.val() === '' || $price.val() === '') {
        return;
    }

    if (+$price.val() <= 0) {
        alert('The price should be bigger than 0');
        return;
    }

    let $tr = $(`<tr><td>${$product.val()}</td><td>${$price.val()}</td></tr>`);
    $tableBody.append($tr);
    let newTotal = Number($totalPrice.text())+Number($price.val());
    
    $totalPrice.text(newTotal);

    $product.val('');
    $price.val('');
}
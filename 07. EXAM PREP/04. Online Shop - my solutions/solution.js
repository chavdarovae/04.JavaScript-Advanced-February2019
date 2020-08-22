function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let $productField = $('input[class="custom-select"]');
    let $button = $('#submit');
    $productField.change(() => $button.attr('disabled', false));

    let $priceField = $('#price');
    let defaultPrice = $priceField.val();

    let $quantityField = $('#quantity');
    let defaultQuantity = $quantityField.val();

    let $appendListElem = $('ul[class="display"]');

    let itemsCounter = 0;
    let totalPrice = 0;

    $button.click(() => {
        if ($productField !== '' && $priceField !== '' && $quantityField !== '') {
            let $liElement = $(`<li>Product: ${$productField.val()} Price: ${$priceField.val()} Quantity: ${$quantityField.val()}</li>`)
            $appendListElem.append($liElement);

            itemsCounter += +$quantityField.val();
            totalPrice += +$priceField.val();
            $('#capacity').val(itemsCounter);
            $('#sum').val(totalPrice);

            if (itemsCounter >= 150) {
                $('#capacity').addClass('fullCapacity');
                $('#capacity').val('full');
                clearFields();
                $productField.attr('disabled', true);
                $quantityField.attr('disabled', true);
                $priceField.attr('disabled', true);
            }
            clearFields();
        }
    })

    function clearFields() {
        $productField.val('');
        $quantityField.val(defaultQuantity);
        $priceField.val(defaultPrice);
        $button.attr('disabled', true);
    }
}

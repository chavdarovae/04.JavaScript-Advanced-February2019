function initializeTable() {
    $('#createLink').on('click', addCountry);

    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinkList();

    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        if (capital !== '' && country !== '') {
            createCountry(country, capital);
        }
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }

    function createCountry(country, capital) {
        let table = $('#countriesTable');
        let row = $('<tr>');
        let firstCell = $(`<td>${country}</td>`);
        let secCell = $(`<td>${capital}</td>`);
        let thirdCell = $(`<td>`)
            .append($(`<a href="#">[Up]</a>`).click(moveUp))
            .append($(`<a href="#">[Down]</a>`).click(moveDown))
            .append($(`<a href="#">[Delete]</a>`).click(deleteRow));

        row.append(firstCell)
            .append(secCell)
            .append(thirdCell);
        table.append(row);     
        
        fixLinkList();
    }

    function moveUp() {
        let currRow=$(this).parent().parent();
        currRow.insertBefore(currRow.prev());
        fixLinkList()
    }

    function moveDown() {
        let currRow=$(this).parent().parent();
        currRow.insertAfter(currRow.next());
        fixLinkList();
    }

    function deleteRow() {
        let currRow=$(this).parent().parent();
        currRow.remove();
        fixLinkList();
    }

    function fixLinkList() {
        $('#countriesTable a').show();
        $('#countriesTable tr:nth-child(3) td:nth-child(3) a:first-child').hide(); 
        $('#countriesTable tr:last-child td:nth-child(3) a:nth-child(2)').hide();           
    }    
}
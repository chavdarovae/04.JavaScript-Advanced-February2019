function increment(selector) {
    let parent = $(selector);

    (function createElements() {
        let textArea = $('<textarea>');
        textArea.addClass('counter');
        textArea.val(0);
        textArea.attr('disabled', true);

        let incrementBtn = $('<button>');
        incrementBtn.addClass('btn');
        incrementBtn.attr('id', 'incrementBtn');
        incrementBtn.text('Increment');
        incrementBtn.click(function () {
            let currValue=$('textarea.counter').val();
            $('textarea.counter').val(++currValue);
        });


        let addBtn = $('<button>');
        addBtn.addClass('btn');
        addBtn.attr('id', 'addBtn');
        addBtn.text('Add');
        addBtn.click(function(){
            let currValue=$('textarea.counter').val();
            $('ul.results').append($('<li>').text(currValue));
        });

        let ul=$('<ul>');
        ul.addClass('results');

        appendElements([textArea,incrementBtn,addBtn, ul], parent);
    })();

    function appendElements(elements, parent) {
        elements.forEach(element => {
            parent.append(element);
        });
    }
}

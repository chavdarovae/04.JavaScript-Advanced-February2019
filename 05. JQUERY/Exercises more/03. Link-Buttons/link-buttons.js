function attachEvents() {
    
    $('a.button').on('click', addClassName);

    function addClassName(element) {
        $('a.button.selected').removeClass('selected');
        let link=element.target;
        link.classList.add('selected')
    }
}
function addSticker() {
    let $title = $('input[class="title"]');
    let $text = $('input[class="content"]');
    let $stickerList = $('#sticker-list');

    if ($title.val() !== '' && $text.val() !== '') {
        let $liElem = $(`<li class="note-content">
                            <p><a class="button">x</a></p>
                            <h2>${$title.val()}</h2>
                            <hr>
                            <p>${$text.val()}</p>
                        </li>`);
        $liElem.find('a').click(() => $liElem.remove());
        $stickerList.append($liElem);

        $title.val('');
        $text.val('');
    }
}
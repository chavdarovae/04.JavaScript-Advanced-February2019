function search() {
   $(`#towns li`).css('font-weight','normal')
   let searchedText = $('#searchText').val();
   let matchesArr = $(`#towns li:contains(${searchedText})`).css('font-weight','bold')
   $('#result').text(`${matchesArr.length} matches found`)
}
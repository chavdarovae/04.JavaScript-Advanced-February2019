function attachEvents() {
	$('#items li').on('click', selectTowns);
	$('#showTownsButton').on('click', listTowns);


	function selectTowns(){
		let currTown=$(this);
		if(!currTown.attr('data-selected')){
			currTown.attr('data-selected','true');
			currTown.css('background','#DDD');
		}else{
			currTown.removeAttr('data-selected');
			currTown.css('background','');
		}		
	}

	function listTowns(){
		let selectedTowns=$('#items li[data-selected="true"]')
								.toArray()
								.map(x=>x.textContent);
		$('#selectedTowns').text(selectedTowns.join(', '));	
	}
}
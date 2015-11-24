$(function () {

function render (){
	$.ajax({
		url: "/balance"
	}	).done(function(data){
		$('#balance').animate({opacity: '0'}, 1000, function(){
			$('#balance').html('<p>'+data+"</p>").animate({opacity: '1'}, 1000);
		})
		
	});
}

render();

$('#reset').on('click', function() {
	render();
})
});
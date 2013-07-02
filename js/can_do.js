$(function(){
	$("input.bt_create").click(function(){
		var title = $("input.new_task").val();
		if (title!="") {
			$("input.new_task").get(0).value="";
			$("div.tasks").append('<div><span>'+title+'</span></div>');
		}
	})

	$("input.new_task").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			var title = $("input.new_task").val();
			if (title!="") {
				$("input.new_task").get(0).value="";
				$("div.tasks").append('<div><span>'+title+'</span></div>');
			}
		}
	})
})
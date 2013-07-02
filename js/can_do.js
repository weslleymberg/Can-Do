$(function(){
	var title = "";
	var count = 0;

	function add_task(title) {
		if (title!="") {
			$("input.new_task").get(0).value="";
			$("div.tasks").append('<div><span>'+title+'</span></div>');
			$("div.footer span.counter").text("Tasks: "+(count+=1));
		}
	}

	$("input.bt_create").click(function(){
		title = $("input.new_task").val();
		add_task(title);
	})

	$("input.new_task").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			title = $("input.new_task").val();
			add_task(title);
		}
	})
})
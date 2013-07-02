$(function(){
	$("input.bt_create").click(function(){
		var title = $("input.new_task").val();
		if (title!="") {
			$("input.new_task").get(0).value="";
			$("div.tasks").append('<div><span>'+title+'</span></div>');
		}
	})
})
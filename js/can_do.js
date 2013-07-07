$(function(){
	var title = "";
	var bt_event = "click";

	$("body").disableSelection();

	function add_task(title) {
		if (title!="") {
			$("input.new_task").get(0).value="";
			$("ul#inventory").append('<li class=\"swipe move open\"><input type="button" class="bt_move"><span>'+title+'</span></li>');
			$("input.new_task").blur();
		}
	}

	if (Zepto.browser.mobile) {
		$("ul.task_container").on('swipeRight', "li.swipe", function() {
			$(this).animate({'margin-left':$(window).width(), 
							 'margin-right':-$(window).width()}, 200, 'linear', function() {
				$(this).remove();
			})
		});	

		bt_event = "tap";
	}

	$("input.bt_create").on(bt_event, function(event){
		title = $("input.new_task").val();
		add_task(title);
	});

	$("input.new_task").keypress(function(event) {
		if (event.which == 13) {
			title = $("input.new_task").val();
			add_task(title);
		}
	});

	$("ul.task_container").on(bt_event, "input.bt_move", function(event) {
		var location = $(this).closest(".move").closest(".task_container");
		if (location.attr("id") == "inventory") {
			$(this).closest(".move").removeClass("open");
			$(this).closest(".move").addClass("ongoing");
			$("ul#today").append($(this).closest(".move"));
		}
		if (location.attr("id") == "today") {
			$(this).closest(".move").removeClass("ongoing");
			$(this).closest(".move").addClass("open");
			$("ul#inventory").append($(this).closest(".move"));
		}
	})
});
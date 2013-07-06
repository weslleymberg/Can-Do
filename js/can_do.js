(function ($) {
$.fn.disableSelection = function () {
    return this.each(function () {
        if (typeof this.onselectstart != 'undefined') {
            this.onselectstart = function() { return false; };
        } else if (typeof this.style.MozUserSelect != 'undefined') {
            this.style.MozUserSelect = 'none';
        } else {
            this.onmousedown = function() { return false; };
        }
    });
};
})(Zepto);

$(function(){
	var title = "";
	var count = 0;

	$("body").disableSelection();

	function add_task(title) {
		if (title!="") {
			$("input.new_task").get(0).value="";
			$("ul#inventory").append('<li class=\"swipe open\"><span>'+title+'</span></li>');
			$("div.footer span.counter").text("Tasks: "+(count+=1));
		}
	}

	$("ul.task_list").on('swipeRight', "li.swipe", function() {
		$(this).animate({'margin-left':$(window).width(), 
						 'margin-right':-$(window).width()}, 300, 'linear', function() {
			$(this).remove();
		})
		$("div.footer span.counter").text("Tasks: "+(count-=1));
		console.log(this, event);
	})

	$("input.bt_create").tap(function(event){
		title = $("input.new_task").val();
		add_task(title);
	});

	$("input.new_task").keypress(function(event) {
		if (event.which == 13) {
			title = $("input.new_task").val();
			add_task(title);
		}
	});
});
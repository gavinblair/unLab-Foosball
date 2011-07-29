var timer;
$(document).ready(function(){
	$("a[href*=#]").click(function(){
		if($($(this).attr("href")).length > 0 && !$(this).hasClass("abort")) {
			$(".page.current").removeClass("current");
			$($(this).attr("href")).addClass("current");
			
			//page-specific load functionality
			clearInterval(timer);
			if($("#choose-table").hasClass("current")){
				$("#choose-table .timer").text("30");
				timer = setInterval(function(){
					var current = parseInt($("#choose-table .timer").text());
					if(current > 0) {
						current--;
						$("#choose-table .timer").text(current);
					} else {
						$(".page.current").removeClass("current");
						$("#home").addClass("current");
						clearInterval(timer);
					}
				}, 1000);
			}
		}
	});
	
	$(".abort").click(function(){
		if(confirm("Are you sure you want to abort this game? No stats will be recorded.")){
			$(".page.current").removeClass("current");
			$($(this).attr("href")).addClass("current");
		}
	});
});
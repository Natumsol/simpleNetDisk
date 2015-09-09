$("#search").on("input", function() {
	var that = this;
	$.ajax({
		url: '/su',
		type: "post",
		data: {
			keyword: $(that).val()
		},
		dataType: 'json',
		success: function(data) {
			if (data.books.length) {
				var segment = "";
				for (var i = 0; i < data.books.length; i++) {
					segment += "<li><a class='drop-menu' target='_blank' href = 'book?id=" + data.books[i]._id + "'>" + data.books[i].bookName + "</a></li>";
				}
				$(".dropdown-menu-search").hide().fadeIn('fast').html(segment);
			} else {
				$(".dropdown-menu-search").hide();
			}
		}
	});
});

$("body").on("click", ".drop-menu", function() {
	$(".dropdown-menu-search").fadeOut('fast').html("");
	return false;
});
$("body").on("mouseenter", ".drop-menu", function() {
	$(this).addClass("selected");
	$("#search").val($(this).html());
});
$("body").on("mouseout", ".drop-menu", function() {
	$(this).removeClass("selected");
});
$("body").click(function() {
	$(".dropdown-menu-search").fadeOut('fast').html("");
});


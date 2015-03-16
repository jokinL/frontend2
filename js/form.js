// On load
$(function(){
	// Get list of post
	list = $(".section");
	// Get first post
	post = $(".article").first();
	/*
	#####################################
	EVENTES
	#####################################
	*/
	// Open/Close form
	$("#js-publish").click(viewform);
	$("#js-form").on("submit", addpost);
});
/*
#####################################
FUNCTIONS
#####################################
*/
// Open/Close form to publish Post
function viewform(){
	$("#js-form").slideToggle();
	$(".article").slideToggle();
}
// Add Post to html
function addpost(){
	// Put in var inputs values
	var title = $("#js-title").val(),
		autor = $("#js-autor").val(),
		tag = $("#js-tag").val(),
		// New var with .article html
		clone = post.clone();
	// Find a and insert var title
	clone.find(".article--title a")
		.text(title);
			/*.attr("href", url)*/
	clone.find(".article--autor a")
			.text(autor);
	clone.find(".article--tag")
			.text(tag);
	clone.hide();
	// Insert clone inside list in first position
	list.prepend(clone);
	$("#js-form").slideToggle();
	title = $("#js-title").val("");
	autor = $("#js-autor").val("");
	tag = $("#js-tag").val("");
	$(".article").slideToggle();
	/*$("#js-form input[type='text']").val("");*/
	/*clone.fadeIn();*/

	return false;
}
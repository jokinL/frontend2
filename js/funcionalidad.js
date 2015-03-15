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
}
// Add Post to html
function addpost(){
	var titulo = $("#js-titulo").val(),
		autor = $("#js-autor").val(),
		tag = $("#js-tag").val(),
		clone = post.clone();

	clone.find(".article--title a")
		.text(titulo);
			/*.attr("href", url)*/
	clone.find(".article--autor a")
			.text(autor);
	clone.find(".article--tag")
			.text(tag);
	clone.hide();
	list.prepend(clone);
	clone.fadeIn();
	
	return false;
}
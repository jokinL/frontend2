// On load
$(function(){
	// Open/Close form
	$("#js-publish").on("click", viewform);
	$("#js-addPost").on("submit", processForm);
});
/*
#####################################
FUNCTIONS
#####################################
*/
// Open/Close form to publish Post
function viewform(){
	$("#js-addPost").slideToggle();
}
// Process form
function processForm(event){
	// Stop default event
	event.preventDefault();
	// Get form info
	var titulo=$("#titulo").val();
	var autor=$("#autor").val();
	var tag=$("#tag").val();
	// View info in console
	console.log(titulo,titulo,tag);
}
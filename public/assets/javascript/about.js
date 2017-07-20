$(document).ready(function(){
	$("#resume").on("click", function(event){
		event.preventDefault();
	 	window.open("/jacob-wallace-resume");
	});
	$("#projects").on("click", function(event){
		event.preventDefault();
	 	window.location.href = "/projects";
	});
});

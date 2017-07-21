var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/projects.html"));
	});

	app.get("/projects", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/projects.html"));
	});

	app.get("/about", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/about.html"));
	});

	app.get("/contact", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/contact.html"));
	});

	app.get("/jacob-wallace-resume", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/assets/media/jacob-tech-resume.pdf"));
	});
}

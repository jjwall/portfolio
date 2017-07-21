var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  app.post("/contact", function(req,res){
    console.log("nodemailer post here");
  });
}

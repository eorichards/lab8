var data = {
  rsvp: ['ixd@ucsd.edu']
};

exports.addRSVP = function(req, res){
	var rsvpEmail = req.body.rsvpEmail;
		console.log(rsvpEmail);
		res.send(rsvpEmail);
}

exports.adminView = function(req, res){
  res.render('rsvp', data);
};

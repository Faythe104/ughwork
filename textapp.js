var accountSid = 'AC9cb55f3fd4a5d31dacb9fa58c6a4075c';
	var authToken = '49c226957d8b9ab8b0e9a2c23808eaab';

	var client = require('twilio')(accountSid, authToken);

	client.messages.create({
		to:'6506565104',
		from:'6502720529',
		body:'Hello from Twilio outbound SMS'
	},
	function(err, message){
		if (err) {
			console.log(error. message);
		} else {
			process.stdout.write(message.sid);
		}
	});

	client.messages.create({
		to:'6506565104',
		from:'6502720529',
		body:'Hej från Twilio utgående SMS ☺'
	},
	function(err, message){
		if (err) {
			console.log(error. message);
		} else {
			process.stdout.write(message.sid);
		}
	});

	client.messages.create({
		to:'6506565104',
		from:'6502720529',
		body:'Picture messaging status:',
		mediaUrl: "https://dl.dropboxusercontent.com/u/11489766/twilio/elearning/success.jpg"
	},
	function(err, message){
		if (err) {
			console.log(error. message);
		} else {
			process.stdout.write(message.sid);
		}
	});

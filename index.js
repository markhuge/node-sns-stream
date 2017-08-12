const {Writable} = require('stream');

module.exports = aws => {
	const stream = new Writable({objectMode: true, write});
	const sns = new aws.SNS();

	function publish(payload) {
		function handler(resolve, reject) {
			sns.publish(payload, (err, response) => {
				if (err) {
					return reject(err);
				}
				resolve(null, response);
			});
		}

		return new Promise(handler);
	}

	function write(item, encoding, callback) {
		publish(item)
		.then(callback);
	}

	return stream;
};

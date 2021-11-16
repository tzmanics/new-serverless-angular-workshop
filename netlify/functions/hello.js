exports.handler = async function(event, context) {
  const name = event.queryStringParameters.name || 'you';

	console.log(`\nEvent: ${JSON.stringify(event)}` );
	console.log(`\nContext: ${JSON.stringify(context)}` );

  return {
		statusCode: 200,
		body: `Well hello there, ${name}!\nRequest from platform: ${event.headers['sec-ch-ua-platform']}`,
	}	
}
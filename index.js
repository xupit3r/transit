const pdfParser = require('pdf-parser');

const PDF_PATH = 'transit.pdf';

const DEMO_KEYS = [
	"Square Miles:",
	"Population:",
	"Total Passengers:",
	"Senior Passengers:",
	"Revenue Vehicle Miles:",
	"Revenue Vehicle Hours:",
	"Section 1513 Allocation:",
	"Required Local Match:",
	"Diesel Motor Bus:",
	"Commuter Rail Cars:",
	"Heavy Rail Cars:",
	"Street Car Rail/Light Rail:",
	"Trolley Bus:",
	"Gasoline Paratransit Vehicles:",
	"Fixed Route Base:",
	"Last Base Fare Increase:"
];

const COMMUNITY_KEYS = [
	"65+ Population:",
	"% of Population 65 and older:",
	"65+ Trips:",
	"PwD Trips:",
	"Other Shared-Ride Trips:",
	"Total Escorts:",
	"Average Shared-Ride Cost per Trip:",
	"Fare Structure Implementation"
];

const AUTHORITIES = [{
	name: "prt",
	demo: 38,
	community: 39
}, {
	name: "septa",
	demo: 40,
	community: 41
}, {
	name: "lanta",
	demo: 80,
	community: 81
}, {
	name: "westmoreland",
	demo: 110,
	community: 111
}];

const extractPage = (pdf, pageId, keys) => {
	const { texts } = pdf.pages.find(page => page.pageId + 1 === pageId);
	const pairs = {};

	for (let i = 0; i < texts.length; i++) {
		if (keys.indexOf(texts[i].text) > -1) {
			pairs[texts[i].text] = texts[i + 1].text;
		}
	}

	return pairs;
}

/**
 * first lets get this to work for a single page
 * */

pdfParser.pdf2json(PDF_PATH, (err, pdf) => {
	if (err !== null) {
		return console.error(err);
	}

	const results = AUTHORITIES.map(authority => {
		const demo = extractPage(
			pdf,
			authority.demo,
			DEMO_KEYS
		);

		const community = extractPage(
			pdf,
			authority.community,
			COMMUNITY_KEYS
		);

		return {
			...authority,
			demo,
			community
		};
	});

	console.log(JSON.stringify(results, null, 2))
});

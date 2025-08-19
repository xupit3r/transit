const pdfParser = require('pdf-parser');

const PDF_PATH = 'transit.pdf';

const URBAN_KEYS = [
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
]

const URBAN_TRANSPORT_PAGES = [
	38,
	40
];

const COMMUNITY_TRANSPORT_PAGES = [
	39,
	41
];

const extractPages = (pages, keys) => {
	return pages.map(page => {
		return extractPage(page, keys)
	});
}
const filterPages = (pdf, desired) => pdf.pages.filter(page => {
	return desired.indexOf(page.pageId + 1) > -1;
});

const extractPage = ({ pageId, texts }, keys) => {
	const pairs = {};

	console.log(texts[0].text, texts[1].text)

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

	const urbanResults = extractPages(
		filterPages(pdf, URBAN_TRANSPORT_PAGES),
		URBAN_KEYS
	);

	const communityResults = extractPages(
		filterPages(pdf, COMMUNITY_TRANSPORT_PAGES),
		COMMUNITY_KEYS
	);

	console.log(JSON.stringify({
		urban: urbanResults,
		community: communityResults
	}, null, 2))
});

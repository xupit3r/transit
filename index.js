const pdfParser = require('pdf-parser');

const PDF_PATH = 'transit.pdf';

const URBAN_TRANSPORT_PAGES = [
	38
];

const COMMUNITY_TRANSPORT_PAGES = [
	39
];

const extractPages = (pages, start, end) => pages.map(
	page => extractPage(page, start, end)
);
const filterPages = (pdf, desired) => pdf.pages.filter(page => {
	return desired.indexOf(page.pageId + 1) > -1;
});

const extractPage = (page, start, end) => {
	const startIdx = page.texts.findIndex(entry => {
		return entry.text.trim() === start;
	});
	const endIdx = page.texts.findIndex(entry => {
		return entry.text.trim() === end;
	}) + 2;
	const relevant = page.texts.slice(startIdx, endIdx);
	const text = relevant.filter(entry => {
		return !entry.bold;
	}).map(entry => entry.text);
	const pairs = {};

	for (let i = 0; i < text.length; i += 2) {
		pairs[text[i]] = text[i + 1];
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
		"URBAN SYSTEM",
		"Last Base Fare Increase:"
	);

	const communityResults = extractPages(
		filterPages(pdf, COMMUNITY_TRANSPORT_PAGES),
		"COMMUNITY TRANSPORTATION",
		"Community Transportation:"
	);


});

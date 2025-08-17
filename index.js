const pdfParser = require('pdf-parser');

const PDF_PATH = 'transit.pdf';

const DESIRED_PAGE = 39;

const pageExtract = (page) => {
	const START = "COMMUNITY TRANSPORTATION";
	const END = "Community Transportation:";

	const startIdx = page.texts.findIndex(entry => {
		return entry.text === START;
	});
	const endIdx = page.texts.findIndex(entry => {
		return entry.text === END;
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

	const page = pdf.pages.find(page => {
		return page.pageId === DESIRED_PAGE - 1;
	});

	// console.log(JSON.stringify(page, null, 2));
	console.log(pageExtract(page));	
});

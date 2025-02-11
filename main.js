const dropZone = document.getElementById('drop-zone');
const searchTagInput = document.getElementById('search-tag');
const loadStandardExampleFileButton = document.getElementById('loadStandardExampleFileButton');
const output = document.getElementById('output');
const applyOidButton = document.getElementById('applyOidButton');
const showSelectedButton = document.getElementById('showSelectedButton');

const json = oidDataAsJson;
let xmlText = null;
let xml = null;
let source = '';
let gridInstance = null;

e2b = new e2b()

// Prevent default behaviors for dragover and drop events
dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
	dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => {
	dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
	e.preventDefault();
	dropZone.classList.remove('dragover');
	const file = e.dataTransfer.files[0]; // Get the dropped file
	if (file) {
		const reader = new FileReader();
		reader.onload = (event) => {
			source = file.name;
			xmlText = event.target.result;
			xml = parseXml(xmlText);
		};
		reader.readAsText(file);
		const searchTagName = searchTagInput.value || "originalText";
		e2b.showTable(xml, source, searchTagName);
	}
	else
		console.error("No file dropped");
})

function parseXml(xmlText) {
	const xmlParser = new DOMParser();
	const xml = xmlParser.parseFromString(xmlText, "application/xml");
	const parseError = xml.getElementsByTagName("parsererror");
	if (parseError.length > 0) {
		console.error("Error parsing XML");
		return;
	}
	console.log("Parsed XML Document:", xml);
	return xml;
}

loadStandardExampleFileButton.addEventListener('click', function () {
	source = '1A.xml';
	xmlText = exampleXml;
	xml = parseXml(xmlText);
	const searchTagName = searchTagInput.value || "originalText";
	e2b.showTable(json, xml);
});

// Update table upon change in search-tag
searchTagInput.addEventListener('input', () => {
	console.log('Input event triggered');
	if (xmlText) {
		const searchTagName = searchTagInput.value || "originalText";
		e2b.showTable(xmlText, source, searchTagName);
	}
});


applyOidButton.addEventListener('click', () => {
	console.log('Apply OID button clicked');
	console.log('xmlText:', xmlText);
	if (xmlText) {

		e2b.showAll(xmlText, source);
	}
});


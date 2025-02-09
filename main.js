const dropZone = document.getElementById('drop-zone');
const searchTagInput = document.getElementById('search-tag');
let currentXml = null;
let currentFileName = '';
let gridInstance = null; // Store the Grid.js instance

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

	// Get the dropped file
	const file = e.dataTransfer.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (event) => {
			const xmlText = event.target.result;
			const xmlParser = new DOMParser();
			currentXml = xmlParser.parseFromString(xmlText, "application/xml");
			currentFileName = file.name;
			const searchTagName = searchTagInput.value || "originalText";
			e2b.showTable(currentXml, currentFileName, searchTagName);
		};
		reader.readAsText(file);
	}
});

// Update table upon change in search-tag
searchTagInput.addEventListener('input', () => {
	console.log('Input event triggered');
	if (currentXml) {
		const searchTagName = searchTagInput.value || "originalText";
		e2b.showTable(currentXml, currentFileName, searchTagName);
	}
});

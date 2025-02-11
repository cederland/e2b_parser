class e2b {
	constructor() { }

	#getPathway(element) {
		let path = [];
		while (element) {
			path.unshift(element.nodeName);
			element = element.parentElement;
		}
		return path.join(" > ");
	}

	#parseElements(elements, source) {
		return Array.from(elements).map(element => {
			const elementName = element.nodeName;
			const text = element.textContent;
			const pathway = this.#getPathway(element);
			return [elementName, text, pathway, source];
		});
	}

	showAll(xmlText, source) {
		console.log('showAll called');
		// Replace tab characters with two spaces
		const formattedXmlText = xmlText.replace(/\t/g, '  ');
		const output = document.getElementById('output');
		output.textContent = formattedXmlText;
	}

	ashowTable(xmlText, source, searchTagName) {
		const xmlParser = new DOMParser();
		console.log('showTable called with xmlText:', xmlText, '\nsource:', source, '\nsearchTagName:', searchTagName);
		const xml = xmlParser.parseFromString(xmlText, "application/xml");

		const parseError = xml.getElementsByTagName("parsererror");
		if (parseError.length > 0) {
			console.error("Error parsing XML");
			return;
		}
		console.log("Parsed XML Document:", xml);
		console.log('showTable called with searchTagName:', searchTagName);
		const elements = xml.documentElement.getElementsByTagName(searchTagName);
		console.log('Elements found:', elements);
		const data = this.#parseElements(elements, source);
		console.log('Data prepared for table:', data);

		const tableContainer = document.getElementById('table');

		// Destroy the existing Grid.js instance if it exists. Otherwise error.
		if (gridInstance) {
			gridInstance.destroy();
		}
		// Create a new Grid.js instance and store it
		gridInstance = new gridjs.Grid({
			columns: [
				{ name: 'Element', sort: true },
				{ name: 'Text', sort: true },
				{ name: 'Pathway', sort: true },
				{ name: 'Source', sort: true }
			],
			data: data, // Pass the data to Grid.js
			resizable: true // Enable column resizing
		}).render(tableContainer);
		console.log('Table rendered');
	}

	showTable(json, xml) {

		let matches = json.map(row => {
			const attributeValue = row[2];
			let matchingTexts = "";
			if (attributeValue !== "-") {
				//Escape the value for inclusion in the query.
				const escapedValue = CSS.escape(attributeValue);

				// Find elements where any attribute *contains* the value
				const matchingElements = Array.from(xml.querySelectorAll(`[root*="${escapedValue}"]`)).map(el => el.parentNode);

				//OR if you want to look for elements with an attribute that has an exact value use
				//(Replace data-myattr with a known attribute name or make it variable.)
				// const matchingElements = Array.from(xml.querySelectorAll(`[data-myattr="${escapedValue}"]`)); 
				matchingTexts = matchingElements.map(el => el.textContent).join("\n");
			}
			return matchingTexts;
		});
		matches.unshift('Value');
		json = json.map((row, index) => {
			return [...row.slice(0, 2), matches[index], ...row.slice(2)];
		});
		json = json.filter(row => row[2] && row[2].length > 0);

		let headers = json[0];
		headers = headers.map(header => ({ name: header, sort: true }));
		let data = json.slice(1);

		const tableContainer = document.getElementById('table');

		// Destroy the existing Grid.js instance if it exists. Otherwise error.
		if (gridInstance) {
			gridInstance.destroy();
		}
		gridInstance = new gridjs.Grid({
			columns: [...headers],
			data: data, // Pass the data to Grid.js
			resizable: true // Enable column resizing
		}).render(tableContainer);
	}
}
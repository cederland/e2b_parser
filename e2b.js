class e2b{
	constructor(){

	}

	#getPathway(element){
		let path = [];
		while (element) {
			path.unshift(element.nodeName);
			element = element.parentElement;
		}
		return path.join(" > ");
	}

	#parseElements(elements, fileName){
		return Array.from(elements).map(element => {
			const elementName = element.nodeName;
			const text = element.textContent;
			const pathway = this.#getPathway(element);
			return [elementName, text, pathway, fileName];
		});
	}

	showTable(xml, fileName, searchTagName) {
		console.log(xml)
		console.log('showTable called with searchTagName:', searchTagName);
		const elements = xml.documentElement.getElementsByTagName(searchTagName);
		console.log('Elements found:', elements);
		const data = this.#parseElements(elements, fileName)
		console.log('Data prepared for table:', data);

		const tableContainer = document.getElementById('table');
		tableContainer.innerHTML = ''; // Clear the table container

			// Destroy the existing Grid.js instance if it exists
		if (gridInstance) {
			gridInstance.destroy();
		}

		// Create a new Grid.js instance and store it
		gridInstance = new gridjs.Grid({
			columns: ['Element', 'Text', 'Pathway', 'File name'],
			data: data // Pass the data to Grid.js
		}).render(tableContainer);
		console.log('Table rendered');
	}

}
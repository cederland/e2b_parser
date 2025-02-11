class XmlTree {
    constructor() {}

    /**
     * Converts an XML document or element into a JSON object.
     *
     * @param {Node} xml - The XML node to convert.
     * @returns {Object|string} The JSON representation of the XML node. If the node is a text node, returns the text content as a string.
     *
     * @private
     */
    #xmlToJson(xml) {
      let obj = {};
      if (xml.nodeType === 1) { // element node
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue; // add attributes to the object
          }
        }
      } else if (xml.nodeType === 3) { // text node
        obj = xml.nodeValue; // set the object to the text content
      }
      if (xml.hasChildNodes()) { // if the node has child nodes
        for (let i = 0; i < xml.childNodes.length; i++) {
          const item = xml.childNodes.item(i);
          const nodeName = item.nodeName;
          if (typeof (obj[nodeName]) === "undefined") {
            obj[nodeName] = this.#xmlToJson(item); // recursively convert child nodes
          } else {
            if (typeof (obj[nodeName].push) === "undefined") {
              const old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old); // convert existing node to an array
            }
            obj[nodeName].push(this.#xmlToJson(item)); // add new node to the array
          }
        }
      }
      return obj; // return the JSON object
    }

    #jsonToTreeData(json, parentKey = '') {
      console.log('json:', json);
        const treeData = [];
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                const node = {
                    text: key,
                    children: [],
                    state: {
                        opened: true
                    }
                };
                if (typeof json[key] === 'object') {
                    node.children = this.#jsonToTreeData(json[key], key);
                } else {
                    node.text += `: ${json[key]}`;
                }
                treeData.push(node);
            }
        }
        return treeData;
    }

    #createTreeData(xml) {
        const json = this.#xmlToJson(xml);
        const treeData = this.#jsonToTreeData(json);
        return treeData;
    }

    showTree(xmlText) {
        const xmlParser = new DOMParser();
        const xml = xmlParser.parseFromString(xmlText, "application/xml");

        const parseError = xml.getElementsByTagName("parsererror");
        if (parseError.length > 0) {
            console.error("Error parsing XML");
            return;
        }

      const treeData = this.#createTreeData(xml);
      console.log('treeData:', treeData);
      let tree = new Tree('#tree-container', {data : treeData});
      // $('#tree-container').jstree({
      //   'core': {'data': treeData},
      //   'plugins': ['checkbox']
      // });
    }

    getSelectedNodes() {
        const selectedNodes = $('#tree-container').jstree("get_selected", true);
        const selectedData = selectedNodes.map(node => node.text);
        return selectedData;
    }
}

// Export the XmlTree class
// export default XmlTree;
dropZone = document.getElementById 'drop-zone'

# Prevent default behaviors for dragover and drop events
dropZone.addEventListener 'dragover', (e) ->
  e.preventDefault()
  dropZone.classList.add 'dragover'

dropZone.addEventListener 'dragleave', ->
  dropZone.classList.remove 'dragover'

dropZone.addEventListener 'drop', (e) ->
  e.preventDefault()
  dropZone.classList.remove 'dragover'

  # Get the dropped file
  file = e.dataTransfer.files[0]
  if file
    reader = new FileReader()
    reader.onload = (event) ->
      xmlText = event.target.result
      xmlParser = new DOMParser()
      xml = xmlParser.parseFromString xmlText, "application/xml"
      showTable xml, file.name
    reader.readAsText file

showTable = (xml, fileName) ->
  originalTexts = xml.documentElement.getElementsByTagName "originalText"
  data = Array.from(originalTexts).map (originalText) ->
    elementName = originalText.nodeName
    text = originalText.textContent
    treeHierarki = Array.from(originalText.parentElement.children).map((child) -> child.nodeName).join " > "
    [elementName, text, treeHierarki, fileName]

  getPathway = (element) ->
    path = []
    while element
      path.unshift element.nodeName
      element = element.parentElement
    path.join " > "

  new gridjs.Grid(
    columns: ['Element', 'Text', 'Tree hierarki', 'File name']
    data: data
  ).render document.getElementById 'table'

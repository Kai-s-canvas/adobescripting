//adobe illustrator script
//kai's canvas 001

var doc = app.activeDocument;
//get index number from active artboard
var abIndex = doc.artboards.getActiveArtboardIndex();
//select all object on active artboard
doc.selectObjectsOnActiveArtboard();
//cut all selected object
app.cut();
//remove artboard by index
doc.artboards.remove(abIndex);
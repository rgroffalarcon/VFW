var numberofViews = 20;
/*
var numberofCols = 1;
var spacing = 4;
var numberofSpaces = (numberofCols + 1) * spacing;
var platformWidth = Ti.Platform.displayCaps.platformHeight;

var newWidth = (platformWidth - numberofSpaces)/numberofViews;
*/

var viewsContainer = Ti.UI.createScrollView({
	layout: "vertical"
});

var makeViews = function(){
	for (var i=0, j=numberofViews; i<j; i++){
		var newView = Ti.UI.createView({
			top: 4, 
			left: 4,
			right: 4, 
			backgroundColor: '#fff',
			height: 100
		});
		var newLabel = Ti.UI.createLabel({
			text: i+1,
			textAlign: "center"
		});
		newView.add(newLabel);
		viewsContainer.add(newView);
		}
};

makeViews();

win.add(viewsContainer);

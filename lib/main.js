var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = buttons.ActionButton({
	id: "dotclear-companion",
	label: "Dotclear companion",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});


function handleClick(state) {
	/*
	require("sdk/tabs").activeTab.attach({
		contentScriptFile: self.data.url("dotclear-sniffer.js")
	});
	*/
}

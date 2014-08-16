(function() {
	'use strict';

	var buttons = require('sdk/ui/button/action');
	var tabs = require("sdk/tabs");
	var self = require("sdk/self");
	//var pageMod = require("sdk/page-mod");

	var button = buttons.ActionButton({
		id		: "dotclear-companion",
		label	: "Dotclear companion",
		icon	: {
			"16"	: "./icon-16.png",
			"32"	: "./icon-32.png",
			"64"	: "./icon-64.png"
		},
		onClick	: handleClick
	});

	tabs.on("ready", handlePage);

	function url_isAdminPost(url) {
		return /\/post\.php\?id=\d+$/.test(url);
	}

	function handlePage(tab) {
		if (url_isAdminPost(tab.url)) {
			// the url pattern seems like in dotclear admin interface
			// let's try to inject a JS, and ask it if it can see DOM patterns from dotclear
			worker = tabs.activeTab.attach({
				contentScriptFile	: self.data.url("admin-embed.js")
			});
			worker.port.emit("dotclear-companion.isAdminPost");
		}
	}

	function handleClick(state) {
	}

})();
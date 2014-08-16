(function() {
	'use strict';

	function body_isAdminPost(window) {
		return window.document.body.id === "dotclear-admin";
	}

	function findPublicPageFromEdit(window) {
		return window.document.querySelector('div#content a.onblog_link.outgoing').href;
	}

})();
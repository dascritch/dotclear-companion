(function(self,document) {
	'use strict';

	var NS_addon	= 'dotclear-companion.';
	var NS_back		= 'dotclear-companion.back.';

	function isAdminPost() {
		self.port.emit(NS_back+'isAdminPost',document.body.id === "dotclear-admin");
	}

	function findPublicPageFromEdit() {
		self.port.emit(NS_back+'findPublicPageFromEdit', document.querySelector('div#content a.onblog_link.outgoing').href );
	}

	self.port.on(NS_addon+'isAdminPost', isAdminPost);
	self.port.on(NS_addon+'findPublicPageFromEdit', findPublicPageFromEdit);

})(self,document);
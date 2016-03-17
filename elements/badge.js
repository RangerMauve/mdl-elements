"use strict";
var ATTRIBUTE_CLASSES = {
	"clear": "mdl-badge--no-background",
	"overlap": "mdl-badge--overlap",
};

module.exports = document.registerElement("mdl-badge", {
	prototype: Object.create(
		window.HTMLSpanElement.prototype, {
			attachedCallback: {
				value: handle_attached
			},
			attributeChangedCallback: {
				value: handle_change
			}
		})
});

function handle_attached() {
	this.classList.add("mdl-badge");

	for (var name in ATTRIBUTE_CLASSES) {
		if (this.hasAttribute(name))
			this.classList.add(ATTRIBUTE_CLASSES[name]);
	}

	window.componentHandler.upgradeElement(this);
}

function handle_change(name) {
	var attributeClass = ATTRIBUTE_CLASSES[name];
	if (!attributeClass) return;

	var has = this.hasAttribute(name);

	if (has)
		this.classList.add(attributeClass);
	else this.classList.remove(attributeClass);

	window.componentHandler.upgradeElement(this);
}

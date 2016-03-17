"use strict";
var ATTRIBUTE_CLASSES = {
	raised: "mdl-button--raised",
	ripple: "mdl-js-ripple-effect",
	colored: "mdl-button--colored",
	accented: "mdl-button--accent",
	fab: "mdl-button--fab",
	mini: "mdl-button--mini-fab",
	icon: "mdl-button--icon",
};

module.exports = document.registerElement("mdl-button", {
	prototype: Object.create(
		HTMLButtonElement.prototype, {
			attachedCallback: {
				value: handle_attached
			},
			attributeChangedCallback: {
				value: handle_change
			}
		})
});

function handle_attached() {
	this.classList.add("mdl-button");
	this.classList.add("mdl-js-button");

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

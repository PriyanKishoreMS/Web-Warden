document.getElementById("save").onclick = () => {
	console.log("save");
	let array = document.getElementById("blacklist").value.split(/\s+/);
	console.log(array, typeof array);
	chrome.storage.local.get("blacklist", list => {
		if (list.blacklist === undefined) {
			chrome.storage.local.set({ blacklist: [].concat(array) }, item => {
				console.log(item);
			});
		} else {
			chrome.storage.local.set(
				{ blacklist: list.blacklist.concat(array) },
				item => {
					console.log(item, "set");
					console.log(item);
				}
			);
		}
		document.getElementById("blacklist").value = "Changes Saved!";
	});
};

chrome.storage.local.get(["state"], function (items) {
	if (items.state == "on") document.getElementById("togglebtn").checked = true;
	else document.getElementById("togglebtn").checked = false;
});

chrome.storage.local.get(["image"], function (items) {
	if (items.image == "on")
		document.getElementById("btn").style.backgroundColor = "rgb(19, 189, 19)";
	else
		document.getElementById("btn").style.backgroundColor = "rgb(231, 68, 68)";
});

chrome.storage.local.get(["text"], function (items) {
	if (items.text == "on")
		document.getElementById("btn1").style.backgroundColor = "rgb(19, 189, 19)";
	else
		document.getElementById("btn1").style.backgroundColor = "rgb(231, 68, 68)";
});

document.getElementById("togglebtn").addEventListener("click", () => {
	chrome.storage.local.get(["state"], function (items) {
		if (typeof items.state == "undefined") {
			state = "on";
			chrome.storage.local.set({ state: "on" }, function () {});
			document.getElementById("togglebtn").checked = true;
		} else if (items.state === "off") {
			chrome.storage.local.set({ state: "on" }, function () {});
			document.getElementById("togglebtn").checked = true;
		} else {
			document.getElementById("togglebtn").checked = false;
			chrome.storage.local.set({ state: "off" }, function () {});
		}
		console.log(items.state);
	});
});

document.getElementById("btn").addEventListener("click", () => {
	chrome.storage.local.get(["image"], function (items) {
		if (typeof items.image == "undefined") {
			image = "on";
			chrome.storage.local.set({ image: "on" }, function () {});
			document.getElementById("btn").style.backgroundColor = "rgb(19, 189, 19)";
			document.getElementById("btn").value = true;
		} else if (items.image == "off") {
			chrome.storage.local.set({ image: "on" }, function () {});
			document.getElementById("btn").style.backgroundColor = "rgb(19, 189, 19)";
			document.getElementById("btn").value = true;
		} else {
			document.getElementById("btn").value = false;
			document.getElementById("btn").style.backgroundColor = "rgb(231, 68, 68)";
			chrome.storage.local.set({ image: "off" }, function () {});
		}
		console.log(items.image);
	});
});

document.getElementById("btn1").addEventListener("click", () => {
	chrome.storage.local.get(["text"], function (items) {
		if (typeof items.text == "undefined") {
			text = "on";
			chrome.storage.local.set({ text: "on" }, function () {});
			document.getElementById("btn1").value = true;
			document.getElementById("btn1").style.backgroundColor =
				"rgb(19, 189, 19)";
		} else if (items.text == "off") {
			chrome.storage.local.set({ text: "on" }, function () {});
			document.getElementById("btn1").value = true;
			document.getElementById("btn1").style.backgroundColor =
				"rgb(19, 189, 19)";
		} else {
			document.getElementById("btn1").checked = false;
			chrome.storage.local.set({ text: "off" }, function () {});
			document.getElementById("btn1").style.backgroundColor =
				"rgb(231, 68, 68)";
		}
		console.log(items.text);
	});
});

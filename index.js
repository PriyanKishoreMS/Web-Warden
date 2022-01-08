const toggle = document.getElementById("toggle");
toggle.style.display = "none";
const tglbtn = document.getElementById("togglebtn");
tglbtn.addEventListener("click", event => {
	if (tglbtn.checked) {
		toggle.style.display = "block";
	} else {
		toggle.style.display = "none";
	}
});

const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");

var toggled = false;
btn.addEventListener("click", () => {
	if (!toggled) {
		toggled = true;
		btn.style.backgroundColor = "rgb(29, 187, 29)";
		btn.style.color = "white";
		btn.innerHTML = "Active";
		return;
	}
	if (toggled) {
		toggled = false;
		btn.style.backgroundColor = "rgb(241, 50, 50)";
		btn.style.color = "white";
		btn.innerHTML = "Inactive";
		return;
	}
});

btn1.addEventListener("click", () => {
	if (!toggled) {
		toggled = true;
		btn1.style.backgroundColor = "rgb(29, 187, 29)";
		btn1.style.color = "white";
		btn1.innerHTML = "Active";
		return;
	}
	if (toggled) {
		toggled = false;
		btn1.style.backgroundColor = "rgb(241, 50, 50)";
		btn1.style.color = "white";
		btn1.innerHTML = "Inactive";
		return;
	}
});

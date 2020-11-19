function over2(obj) {
    obj.src="./images/ps2.jpg";
}
function out2(obj) {
    obj.src="./images/ps3.jpg";
}

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover",
function() {
    img4.src="./images/ps2.jpg"
});
img4.addEventListener("mouseout",
function() {
    img4.src="./images/ps3.jpg"
});

var img5 = document.getElementById("img5");
img5.addEventListener("mouseover", over3);
img5.addEventListener("mouseout", out3);

function over3() {
    img5.src="./images/ps2.jpg"
}
function out3() {
    img5.src="./images/ps3.jpg"
}
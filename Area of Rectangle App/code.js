function rect() {
    let length = document.getElementById("l").value
    let width = document.getElementById("w").value
    let Calculate = length * width
    document.getElementById("ans").innerHTML = "The area of rectangle is "+ Calculate;
}
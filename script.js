function update() {
    tm = document.getElementById("inpt").value
    lcl = localStorage.setItem("time",tm)

}
function get(params) {
    lcl2 = localStorage.getItem("time")
    document.getElementById("lbl").innerHTML=lcl2
}
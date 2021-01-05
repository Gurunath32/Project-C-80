var input=[];
var inputs=[];
function get_para1() {
    for(var i=1; i<=6; i++) {
        input.push(document.getElementById("p1_ib" +i).value);
    }
        document.getElementById("show_para1").innerHTML = input.join(". ");
}

function get_para2() {
    for(var i = 1 ; i <=6 ; i++) {
        inputs.push(document.getElementById("p2_ib" +i).value);
    }
        document.getElementById("show_para1").innerHTML = inputs.join(". ");
}

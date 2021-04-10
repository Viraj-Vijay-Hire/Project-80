function getPara1() {
    var para=[];
    for( var i=1; i<=6; i++ ) {
        para.push(document.getElementById("p1_input_box_" + i).value);
    }
    document.getElementById("showParagraph_1").innerHTML=para.join(". ");
}

function getPara2() {
    var para=[];
    for( var i=1; i<=6; i++ ) {
        para.push(document.getElementById("p2_input_box_" + i).value);
    }
    document.getElementById("showParagraph_2").innerHTML=para.join(". ");
}
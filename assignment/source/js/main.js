// section 1
function changebgColor() {
    var bgcolor = document.getElementById('bgcolor').value;
    var body = document.getElementsByTagName('main')[0];

    body.style.backgroundColor = bgcolor;
}
// section 2
function changeColor() {
    var color = document.getElementById('color').value;
    var body1 = document.getElementsByTagName('main')[0];

    body1.style.color = color;
}
// section 2
function alignText() {
    var textalign = document.getElementById('aligntext').value;
    var heading = document.getElementsByTagName('h1')[0];

    heading.style.textAlign = textalign;
}
// section 3
function width() {
    var parawidth = document.getElementById('parawidth').value;
    var para = document.getElementsByTagName('p')[0];

    para.style.width = parawidth;
}
// section 4
function height() {
    var paraheight = document.getElementById('paraheight').value;
    var para1 = document.getElementsByTagName('p')[0];

    para1.style.height = paraheight;
}
// section 5
function gap() {
    var cardgap = document.getElementById('cardgap').value;
    var card = document.getElementById('card');

    card.style.flexDirection = cardgap;
}
// section 6
function justifyItem() {
    var justify = document.getElementById('justify').value;
    var item = document.getElementsByTagName('main')[0];

    item.style.justifyItems = justify;
}
// section 7
function alignContent() {
    var align = document.getElementById('align').value;
    var content = document.getElementsByTagName('main')[0];

    content.style.alignContent = align;
}
// section 1
function changebgColor() {
    const bgcolor = document.getElementById('bgcolor').value;
    const body = document.getElementsByTagName('main')[0];

    body.style.backgroundColor = bgcolor;
}
// section 2
function changeColor() {
    const color = document.getElementById('color').value;
    const body1 = document.getElementsByTagName('main')[0];

    body1.style.color = color;
}
// section 2
function alignText() {
    const textalign = document.getElementById('aligntext').value;
    const heading = document.getElementsByTagName('h1')[0];

    heading.style.textAlign = textalign;
}
// section 3
function width() {
    const parawidth = document.getElementById('parawidth').value;
    const para = document.getElementsByTagName('p')[0];

    para.style.width = parawidth;
}
// section 4
function height() {
    const paraheight = document.getElementById('paraheight').value;
    const para1 = document.getElementsByTagName('p')[0];

    para1.style.height = paraheight;
}
// section 5
function gap() {
    const cardgap = document.getElementById('cardgap').value;
    const card = document.getElementById('card');

    card.style.flexDirection = cardgap;
}
// section 6
function justifyItem() {
    const justify = document.getElementById('justify').value;
    const item = document.getElementsByTagName('main')[0];

    item.style.justifyItems = justify;
}
// section 7
function alignContent() {
    const align = document.getElementById('align').value;
    const content = document.getElementsByTagName('main')[0];

    content.style.alignContent = align;
}
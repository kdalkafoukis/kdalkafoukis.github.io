import config from './config';
    
var addTextToParagraph = function (text) {
    document.getElementById("paragraph-1").innerHTML = text || config.hello;
};

window.addTextToParagraph = addTextToParagraph;

export default addTextToParagraph
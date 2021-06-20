const firstUserButtonElement = document.querySelector("#firstUserButton");
const secondUserButtonElement = document.querySelector("#secondUserButton");

const firstUserTextArea = document.querySelector(".firstUserTextArea");
const secondUserTextArea = document.querySelector(".secondUserTextArea");

firstUserButtonElement.addEventListener("click", sendMessageToSecondUser);
secondUserButtonElement.addEventListener("click", sendMessageToFirstUser);

function sendMessageToSecondUser(e){
    e.preventDefault();
    
    const messageValue = document.querySelector(".firstInput").value;

    firstUserTextArea.appendChild(createRightParagraph(messageValue));
    secondUserTextArea.appendChild(createLeftParagraph(messageValue));
    
    document.querySelector(".firstInput").value = '';

    attScroll();

}

function sendMessageToFirstUser(e){
    e.preventDefault();
    
    const messageValue = document.querySelector(".secondInput").value;

    firstUserTextArea.appendChild(createLeftParagraph(messageValue));
    secondUserTextArea.appendChild(createRightParagraph(messageValue));
    
    document.querySelector(".secondInput").value = '';

    attScroll();
}


function createElementParagraph(){
    return document.createElement("p");
}

function createLeftParagraph(messageValue){
    var paragraph = createElementParagraph();

    paragraph.setAttribute('class', 'leftPositionParagraph');
    paragraph.appendChild(createATextNode(messageValue));

    return paragraph;
}

function createRightParagraph(messageValue){
    var paragraph = createElementParagraph();
    
    paragraph.setAttribute('class', 'rightPositionParagraph');
    paragraph.appendChild(createATextNode(messageValue));

    return paragraph;
}

function createATextNode(value){
    return document.createTextNode(value);
}

function attScroll(){
    firstUserTextArea.scrollTop = firstUserTextArea.scrollHeight;
    secondUserTextArea.scrollTop = secondUserTextArea.scrollHeight;
}
const firstUserButtonElement = document.querySelector("#firstUserButton");
const secondUserButtonElement = document.querySelector("#secondUserButton");

const firstUserTextArea = document.querySelector(".firstUserTextArea");
const secondUserTextArea = document.querySelector(".secondUserTextArea");

firstUserButtonElement.addEventListener("click", sendMessageToSecondUser);
secondUserButtonElement.addEventListener("click", sendMessageToFirstUser);

function sendMessageToSecondUser(e){
    e.preventDefault();

    const senderTextBox = firstUserTextArea;
    const receiverTextBox = secondUserTextArea;
    
    sendMessage(senderTextBox,receiverTextBox,".firstInput");
}

function sendMessageToFirstUser(e){
    e.preventDefault();
    
    const senderTextBox = secondUserTextArea;
    const receiverTextBox = firstUserTextArea;

    sendMessage(senderTextBox,receiverTextBox,".secondInput");
}

function sendMessage(sender, receiver, className){
    const messageValue = document.querySelector(className).value;

    sender.appendChild(createRightParagraph(messageValue));
    receiver.appendChild(createLeftParagraph(messageValue));
    
    document.querySelector(className).value = '';

    updateScroll();
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

function updateScroll(){
    firstUserTextArea.scrollTop = firstUserTextArea.scrollHeight;
    secondUserTextArea.scrollTop = secondUserTextArea.scrollHeight;
}
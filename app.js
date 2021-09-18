var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input");
var txtOutput= document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/minion.json"

function getTranslate(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    alert("something went wrong");
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslate(inputText))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)
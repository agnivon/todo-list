function createListElement(){
    var listItem = document.createElement("li")
    var inputField = document.getElementById("userinput")
    var unorderedList = document.querySelector("ul")
    listItem.appendChild(document.createTextNode(inputField.value))
    unorderedList.appendChild(listItem)
    inputField.value = "";

    function crossOut(){
        listItem.classList.toggle("done")
    }

    listItem.addEventListener("click", crossOut)

    function deleteListItem(){
        listItem.classList.add("delete")
    }

    var deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("X"))
    listItem.appendChild(deleteButton)
    deleteButton.addEventListener("click", deleteListItem)
}

function inputLength(){
    return document.getElementById("userinput").value.length
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.key === "Enter"){
        createListElement()
    }
}

$(() => {
    var enterButton = document.getElementById("enter")
    var inputField = document.getElementById("userinput")
    var item = document.getElementsByTagName("li")
    enterButton.addEventListener("click", addListAfterClick)
    inputField.addEventListener("keypress", addListAfterKeypress)
})



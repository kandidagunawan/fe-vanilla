var tabButton = document.querySelectorAll(".tab-container .button-container button")
var tabPanel = document.querySelectorAll(".tab-container .tab-panel")

function showPanel(panelIndex, colorCode){
    tabButton.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    })
    tabButton[panelIndex].style.backgroundColor = colorCode;
    tabButton[panelIndex].style.color = "white";
    tabPanel.forEach(function(node){
        node.style.display = "none";
    })
    tabPanel[panelIndex].style.display = "block";
    tabPanel[panelIndex].style.backgroundColor= colorCode;
}
showPanel(0, '#0080fe')
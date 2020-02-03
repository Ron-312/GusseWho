'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    // TODO: hide the game-start section
    $('.game-start').hide()
    renderQuest();
    // TODO: show the quest section
    $('.quest').show()
}

function renderQuest() {
    // TODO: select the <h2> inside quest and update
    // its text by the currQuest text
    var $currQuestText = getTxtOfQuestToShow()
    $('.quest > h2').text(`${$currQuestText}`)
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(gCurrQuest)) {
        if (res === 'yes') {
            showModal(true)
            
            // alert('Yes, I knew it!');
            // TODO: improve UX
        } else {
            showModal(false)
            // alert('I dont know...teach me!')
            // TODO: hide and show new-quest section
            renderGiveUp()
        }
    } else {
        // TODO: update the lastRes global var
        moveToNextQuest(res);
        gLastRes = res
        renderQuest();
    }
}

function showModal(res){
    if(res){
        $('.modal-txt').text('Yes, I knew it!')
        $('.modal').show()
    }else{
        $('.modal-txt').text('I dont know...teach me!')
        $('.modal').show()   
    }
}
function renderGiveUp() {
    $('.quest').hide()
    $('.new-quest').show()
}

function onAddGuess() {
    // TODO: Get the inputs' values
    var $newQuestTxt = $('#newQuest').val()
    var $newGuessTxt = $('#newGuess').val()
    // TODO: Call the service addGuess
    addGuess($newQuestTxt, $newGuessTxt, gLastRes)
    onRestartGame();
    $newQuestTxt = $('#newQuest').val('')
    $newGuessTxt = $('#newGuess').val('')
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    resetGame()
    renderQuest()

}

function onClose(){
    $('.modal').hide()
}
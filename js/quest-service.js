var KEY = 'QuestTree'

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    var storageTree = loadFromStorage(KEY)
    if (!storageTree) {
        gQuestsTree = createQuest('Male?');

        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');

        gCurrQuest = gQuestsTree;

        gPrevQuest = null;
    } else {
        gQuestsTree = storageTree;
        
        gCurrQuest = gQuestsTree;

        gPrevQuest = null;
    }

}
function resetGame() {
    gCurrQuest = gQuestsTree
    gPrevQuest = null
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}
function getTxtOfQuestToShow() {
    return gCurrQuest.txt;
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest
    gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, LastRes) {
    var newQuest = createQuest(newQuestTxt);
    newQuest.yes = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;
    gPrevQuest[LastRes] = newQuest;
    saveToStorage(KEY, gQuestsTree)

    // TODO: Create and Connect the 2 Quests to the quetsions tree

}


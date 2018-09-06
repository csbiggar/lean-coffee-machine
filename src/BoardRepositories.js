class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }

    saveCard() {

    }
}

class LocalStorageBoardRepository {
    load() {
        const cards =  JSON.parse(window.localStorage.getItem("cards"))
        return cards ? cards : [];
    }

    // TODO new interface
    /*
    createBoard()
    getBoard(boardId)
    createCard(boardId, cardDetails)
    updateCard(boardId, cardId, cardDetails)
    deleteCard(boardId, cardId)
    */

    saveCard(card) {
        let cards = this.load();
        cards.push(card);
        window.localStorage.setItem("cards", JSON.stringify(cards));
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
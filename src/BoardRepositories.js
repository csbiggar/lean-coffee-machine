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

    saveCard(card) {
        let cards = this.load();
        cards.push(card);
        window.localStorage.setItem("cards", JSON.stringify(cards));
    }

    // TODO new interface
    /*

    Globally unique cards containing reference to a board

    createBoard()
    getBoard(boardId)

    createCard(newcardRequest { boardId, content }) POST /cards pass a body with boardId, content
    updateCard(updateCardRequest {cardId, content })   PATCH /cards/{cardId}  pass a body of content
    deleteCard(cardId) DELETE /cards/{cardId}


    */

    createCard(newCardRequest) {
        const newCard = {
            id: 1,
            ...newCardRequest
        };

        let cards = this.load();
        cards.push(newCard);
        window.localStorage.setItem("cards", JSON.stringify(cards));

        return newCard;
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
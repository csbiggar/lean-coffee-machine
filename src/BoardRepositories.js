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
        const cards = this.load();

        const newCard = {
            id: cards.length+1, // Naughty. Will go badly wrong once you've deleted cards
                                // Suggest taking the (max+1) ID or even better, storing
                                // a "Card ID sequence" number separately and incrementing
                                // this each time?
            ...newCardRequest
        };
        cards.push(newCard);
        window.localStorage.setItem("cards", JSON.stringify(cards));

        return newCard;
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
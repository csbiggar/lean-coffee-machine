class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }

    saveCard() {

    }
}

class LocalStorageBoardRepository {
    load() {
        window.localStorage.getItem("cards")
    }

    saveCard(card) {
        window.localStorage.setItem("cards", [card])
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
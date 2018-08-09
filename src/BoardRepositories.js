class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }

    saveCard() {

    }
}

class LocalStorageBoardRepository {
    load() {
        return JSON.parse(window.localStorage.getItem("cards"))
    }

    saveCard(card) {
        window.localStorage.setItem("cards", JSON.stringify({cards: [card]}))
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
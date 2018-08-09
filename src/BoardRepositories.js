class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }

    saveCard() {

    }
}

class LocalStorageBoardRepository {
    load() {}

    saveCard(card) {
        window.localStorage.setItem("cards", [card])
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
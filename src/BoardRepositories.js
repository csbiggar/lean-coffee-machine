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
        window.localStorage.setItem("cards", JSON.stringify([card]))
    }
}

export {
    SampleBoardRepository,
    LocalStorageBoardRepository
}
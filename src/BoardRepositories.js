class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }

    saveCard() {

    }
}

/*class LocalStorageBoardRepository {
    load() {

    }
}*/

export {
    SampleBoardRepository
}
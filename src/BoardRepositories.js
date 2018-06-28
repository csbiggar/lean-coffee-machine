export default class SampleBoardRepository {
    load() {
        return {cards: [{content: "board repository content", cardId: "1", editable: false}]}
    }
}

class LocalStorageBoardRepository {
    load() {

    }
}
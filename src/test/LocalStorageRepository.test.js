/**
 * @jest-environment node
 */
import {LocalStorageBoardRepository} from '../BoardRepositories';

beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear()
});

test('should save to empty localStorage', () => {
    const repository = new LocalStorageBoardRepository();
    let saveCardPayload = {
        id: "1",
        content: "whatever"
    };

    repository.saveCard(saveCardPayload)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify([saveCardPayload]));
});

test('should add card to non-empty localStorage', () => {
    const repository = new LocalStorageBoardRepository();
    localStorage.setItem("cards", JSON.stringify(
        [
            {
                id: "1",
                content: "old stuff"
            }
        ]
    ));

    let saveCardPayload = {
        id: "2",
        content: "whatever"
    };

    repository.saveCard(saveCardPayload)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify(
            [
                {
                    id: "1",
                    content: "old stuff"
                },
                {
                    id: "2",
                    content: "whatever"
                }
            ]
    ));
});

test('should load cards from localStorage', () => {
    const repository = new LocalStorageBoardRepository();

    repository.load();

    expect(localStorage.getItem).toHaveBeenLastCalledWith("cards");
});

test('should return empty array if theres nothing there', () => {
    const repository = new LocalStorageBoardRepository();

    expect(repository.load()).toEqual([])
});


test('should create new card on empty local storage', () => {
    const repository = new LocalStorageBoardRepository();
    let createCardPayload = {
        boardId: 1,
        content: "whatever"
    };

    repository.createCard(createCardPayload);

    let savedCard = {
        id: 1,
        boardId: 1,
        content: "whatever"
    };

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify([savedCard]));
});



test('should take the highest ID+1 when assigning new card IDs', () => {
    //given a repo with an existing saved card
    const repository = new LocalStorageBoardRepository();
    const existingCard = {
        id: 2,
        boardId: 1,
        content: "old stuff"
    };
    localStorage.setItem("cards", JSON.stringify(
        [ existingCard ]
    ));

    //when i save a new card
    const createCardPayload = {
        boardId: 3,
        content: "whatever"
    };
    repository.createCard(createCardPayload)

    //then repo contains both cards and new card has a unique id
    const newCard = {
        id: 3,
        boardId: 3,
        content: "whatever"
    };

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify(
            [
                existingCard, newCard
            ]
        ));
});


test('should update content of an existing card', () => {
    //given a repo with an existing saved card
    const repository = new LocalStorageBoardRepository();
    const existingCard = {
        id: 2,
        boardId: 1,
        content: "old stuff"
    };
    localStorage.setItem("cards", JSON.stringify(
        [ existingCard ]
    ));

    //when i update the card
    const updateCardPayload = {
        id: 2,
        content: "new stuff"
    };
    repository.updateCard(updateCardPayload)

    //then the repo contains the updated card
    const updatedCard = {
        id: 2,
        boardId: 1,
        content: "new stuff"
    };

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify(
            [
                updatedCard
            ]
        ));
});

test('should delete an existing card', () => {
    //given a repo with an existing saved card
    const repository = new LocalStorageBoardRepository();
    const existingCard1 = {
        id: 1,
        boardId: 1,
        content: "stuff 1"
    };
    const existingCard2 = {
        id: 2,
        boardId: 1,
        content: "stuff 2"
    };
    localStorage.setItem("cards", JSON.stringify(
        [existingCard1, existingCard2]
    ));

    //when I delete the card
    repository.deleteCard(2)

    //then the repo no longer contains the card
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify([existingCard1]));
});


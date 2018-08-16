/**
 * @jest-environment node
 */
import {LocalStorageBoardRepository} from '../BoardRepositories';

beforeEach(() => {
    localStorage.clear();
})

test('should save to localStorage', () => {
    const repository = new LocalStorageBoardRepository();
    let saveCardPayload = {
        id: "1",
        content: "whatever"
    };

    repository.saveCard(saveCardPayload)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify([saveCardPayload]));
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
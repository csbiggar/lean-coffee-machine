/**
 * @jest-environment node
 */
import {LocalStorageBoardRepository} from '../BoardRepositories';

test('should save to localStorage', () => {
    const repository = new LocalStorageBoardRepository();
    let saveCardPayload = {
        id: "1",
        content: "whatever"
    };

    repository.saveCard(saveCardPayload)

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "cards", JSON.stringify({cards:[saveCardPayload]}));
});

test('should load cards from localStorage', () => {
    const repository = new LocalStorageBoardRepository();

    repository.load();

    expect(localStorage.getItem).toHaveBeenLastCalledWith("cards");
});

// TODO
//
// Ensure that a load() call will handle missing data, e.g. for a new
// browser that doesn't have anything persisted to localStorage
//
// Deeper tests on shape of data being returned by load() call,
// following saveCard() operations.
//
// Also a bit weird to persist the entire app state. Maybe just save
// the cards array instead.
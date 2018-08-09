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

    expect(localStorage.setItem).toHaveBeenLastCalledWith("cards", [saveCardPayload]);
});

test('should load cards from localStorage', () => {
    const repository = new LocalStorageBoardRepository();

    repository.load();

    expect(localStorage.getItem).toHaveBeenLastCalledWith("cards");
});

// TODO Deeper tests on shape of data being returned by load() call,
// following saveCard() operations
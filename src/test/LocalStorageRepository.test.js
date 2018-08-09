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
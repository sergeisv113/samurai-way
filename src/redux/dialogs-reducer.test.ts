import {dialogsPageType, dialogsReducer, sendMessageAC} from "./dialogs-reducer";

let startState: dialogsPageType
beforeEach(() => {
  startState = {
    messages: [
      {id: "1", text: "Hello"},
      {id: "2", text: "How are you?"},
      {id: "3", text: "Good bye"},
    ],
    dialogs: [
      {id: "1", name: "Nikita"},
      {id: "2", name: "Dasha"},
      {id: "3", name: "Asya"},
      {id: "4", name: "..."},
    ],
  }
})

test('correct message should be added in the end of list', () => {
  const action = sendMessageAC("test message", 'user')
  const endState = dialogsReducer(startState, action)

  expect(endState.messages.length).toBe(4)
  expect(endState.messages[3].text).toBe("test message")
})

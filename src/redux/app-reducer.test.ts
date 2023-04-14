import {initialStateType, appReducer, initializedSuccessAC} from "./app-reducer";

let startState: initialStateType
beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('initialized status should be changed', () => {
    const action = initializedSuccessAC(true)
    const endState = appReducer(startState, action)

    expect(endState.initialized).toBe(true)
})

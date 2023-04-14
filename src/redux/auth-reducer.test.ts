import {authReducer, AuthStateType, setAuthUserDataAC} from "./auth-reducer";

let startState: AuthStateType
beforeEach(() => {
  startState = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
  }
})

test('correct data should be set', () => {
  const action = setAuthUserDataAC(26918, 'NikCan', 'nikitagaponov@gmail.com', true)
  const endState = authReducer(startState, action)

  expect(endState).toStrictEqual({
    id: 26918,
    login: 'NikCan',
    email: 'nikitagaponov@gmail.com',
    isFetching: true,
    isAuth: true,
  })
})

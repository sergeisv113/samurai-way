import {CommentType, getCommentsAC, newsReducer} from "./news-reducer";

let startState: CommentType[]
beforeEach(() => {
    startState = [
        {postId: '', id: '1', name: 'Name', email: 'email', body: 'body'},

    ]
})

test('correct message should be added in the end of list', () => {
    const action = getCommentsAC([{postId: '', id: '5', name: 'Name', email: 'email', body: 'body'}])
    const endState = newsReducer(startState, action)

    expect(endState.length).toBe(1)
})

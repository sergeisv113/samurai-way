import {
    addPostAC,
    setUserProfileAC,
    profileReducer,
    setUserStatusAC,
    UserProfileType, profilePageType
} from "./profile-reducer";
import {v1} from "uuid";


const state: profilePageType = {
    posts: [
       /* {id: v1(), message: 'Hi, it\'s  my first post', counterLike: '12'},
        {id: v1(), message: 'Hola, howe are you?', counterLike: '24'},
        {id: v1(), message: 'Yo!', counterLike: '11'},
        {id: v1(), message: 'GG', counterLike: '1'},*/
    ],
    profile: null,
    status: '',
}

test('new post should be added, length + 1', ()=> {
    //1 test data
    let action = addPostAC('it-kam')
   //2.action
    let newState = profileReducer(state, action)
    //3 expectation
   expect(newState.posts.length).toBe(5)
    expect(newState.posts[0].message).toBe('it-kam')
})

test('after deleting length of messages should be decrement', ()=> {
    //1 test data
    let newUser:UserProfileType = {
        userId: +v1(),
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    }
    let action = setUserProfileAC(newUser)
    //2.action
    let endState = profileReducer(state, action)
    //3 expectation
    expect(endState.profile).toBe(newUser)
})

test('correct status be set', ()=> {
    let action = setUserStatusAC('Test')
    const endState = profileReducer(state, action)
    expect(endState.status).toBe('Test' )
})


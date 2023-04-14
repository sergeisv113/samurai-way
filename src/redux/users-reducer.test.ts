import {
    followSuccessAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountsAC,
    setUsersAC, statusFollowingAC, setToggleIsFetchAC,
    unfollowSuccessAC,
    usersReducer
} from "./users-reducer";

let startState: InitialStateType
beforeEach(() => {
    startState = {
        users: [
            {
                id: 1,
                photoUrl: "",
                name: "Nik",
                status: "Hello!",
                location: {city: "Novgorod", country: "Russia"},
                followed: false,
                photos: {
                    small: "",
                    large: "",
                }
            },
            {
                id: 2,
                photoUrl: "",
                name: "Dasha",
                status: "Hi!",
                location: {city: "Novgorod", country: "Russia"},
                followed: true,
                photos: {
                    small: "",
                    large: "",
                }
            }
        ],
        pageSize: 50,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [1,],
    }
})

test('correct user should be followed', () => {
    const action = followSuccessAC(1)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBe(true)
})

test('correct user should be unfollowed', () => {
    const action = unfollowSuccessAC(2)
    const endState = usersReducer(startState, action)

    expect(endState.users[1].followed).toBe(false)
})

test('newUsers should be set', () => {
    const newUsers = [
        {
            id: 3,
            photoUrl: "",
            name: "Nik",
            status: "Hello!",
            location: {city: "Novgorod", country: "Russia"},
            followed: false,
            photos: {
                small: "",
                large: "",
            }
        },
        {
            id: 4,
            photoUrl: "",
            name: "Dasha",
            status: "Hi!",
            location: {city: "Novgorod", country: "Russia"},
            followed: true,
            photos: {
                small: "",
                large: "",
            }
        }
    ]
    const action = setUsersAC(newUsers)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].id).toBe(3)
    expect(endState.users[1].id).toBe(4)
    expect(endState.users.length).toBe(2)
})

test('correct page number should be set', () => {
    const action = setCurrentPageAC(3)
    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(3)
})

test('correct total users count should be set', () => {
    const action = setTotalUsersCountsAC(100)
    const endState = usersReducer(startState, action)

    expect(endState.totalUsersCount).toBe(100)
})

test('fetching should be toggled', () => {
    const action = setToggleIsFetchAC(true)
    const endState = usersReducer(startState, action)

    expect(endState.isFetching).toBe(true)
})

test('correct id should be added to following list', () => {
    const action = statusFollowingAC(2, true)
    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress).toStrictEqual([1,2])
})

test('correct id should be removed from following list', () => {
    const action = statusFollowingAC(1, false)
    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress.length).toBe(0)
})

test('length of following list should not be changed, if removing id is not from list', () => {
    const action = statusFollowingAC(2, false)
    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress.length).toBe(1)
})
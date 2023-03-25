import React from 'react';
import {AppStateType, UserType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';
import {
    getUserTC,
    onFollowUserTC,
    onUnfollowUserTC,
    setCurrentPageAC
} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    getUser: (currentPage: number, pageSize: number) => void
    onFollowUser: (id: number) => void
    onUnfollowUser: (id: number) => void
    forPageChanged: (currentPage: number) => void
}

// Server Call ------------------
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
         this.props.getUser(this.props.currentPage, this.props.pageSize)
    }
    onChangedPageHandler = (currentPage: number) => {
        this.props.getUser(currentPage, this.props.pageSize)
        this.props.forPageChanged(currentPage)
    }

    render() {
        const {
            users,
            totalUserCount,
            currentPage,
            pageSize,
            isFetching,
            followingInProgress,
            getUser,
            onUnfollowUser,
            onFollowUser,
            forPageChanged,
        } = this.props

        return <>
            {isFetching ? <Preloader /> : null}
                 <Users
                    users={users}
                    isFetching={isFetching}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalUserCount={totalUserCount}
                    followingInProgress={followingInProgress}
                    getUser={getUser}
                    onUnfollowUser={onUnfollowUser}
                    onFollowUser={onFollowUser}
                    forPageChanged={forPageChanged}
                />
        </>
    }
}


//Connect to Store for 'UsersPage' -----------------------------------------------------------------------------------------------------------------------
/*const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    getUser: getUserTC,
    onUnfollowUser: onUnfollowUserTC,
    onFollowUser: onFollowUserTC,
    forPageChanged: setCurrentPageAC,
}

//HOK for UsersAPIComponent and next for Users(presentation component) ----------------------------------------------
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(UsersContainer)


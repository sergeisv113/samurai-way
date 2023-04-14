import React from 'react';
import {AppStateType} from '../../redux/store';
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
    getUsers, getTotalUsersCount
} from "../../redux/users-selectors";
import {withRouter} from "react-router-dom";

export type userType = {
    id: number
    photoUrl: string
    name: string
    status: string
    location: { city: string, country: string }
    followed: boolean
    photos: {
        small: string
        large: string
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    // portionSize?: number | undefined;
}
type MapDispatchPropsType = {
    getUserTC: (currentPage: number, pageSize: number) => void
    setCurrentPageTC: (pageNumber: number) => void
    onFollowUserTC: (id: number) => void
    onUnfollowUserTC: (id: number) => void
}

// Server Call ------------------
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
         this.props.getUserTC(currentPage, pageSize)
    }
    onChangedPageHandler = (pageNumber: number) => {
        const {pageSize} = this.props
     //   this.props.setCurrentPage(pageNumber)
        this.props.getUserTC(pageNumber, pageSize)

    }

    render() {
        const {
            users,
            totalUsersCount,
            currentPage,
            pageSize,
            isFetching,
            followingInProgress,
            onUnfollowUserTC,
            onFollowUserTC,
        } = this.props

        return <>
            {isFetching ? <Preloader /> : null}
                 <Users
                    users={users}
                    onChangedPageHandler={this.onChangedPageHandler}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalUsersCount={totalUsersCount}
                    followingInProgress={followingInProgress}
                    onUnfollowUserTC={onUnfollowUserTC}
                    onFollowUserTC={onFollowUserTC}
                />
        </>
    }
}


//Connect to Store for 'UsersPage' -----------------------------------------------------------------------------------------------------------------------

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


//HOK for UsersAPIComponent and next for Users(presentation component) ----------------------------------------------
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserTC, onUnfollowUserTC, onFollowUserTC, setCurrentPageAC }),
    // withAuthRedirect,
    )(UsersContainer)


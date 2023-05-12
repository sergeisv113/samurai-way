import React from 'react';
import {AppStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';
import {
    getUserTC,
    followTC,
    unfollowTC,
    setCurrentPageAC, FilterType
} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers, getTotalUsersCount, getUsersFilter
} from "../../redux/users-selectors";

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
    filter: FilterType
}
type MapDispatchPropsType = {
    getUserTC: (currentPage: number, pageSize: number, filter: FilterType) => void
    setCurrentPageTC: (pageNumber: number) => void
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}

// Server Call ------------------
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
         this.props.getUserTC(currentPage, pageSize, filter)
    }
    onChangedPageHandler = (pageNumber: number) => {
        const {pageSize, filter} = this.props
     //   this.props.setCurrentPage(pageNumber)
        this.props.getUserTC(pageNumber, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) => {
        const { pageSize} = this.props
        this.props.getUserTC(1, pageSize, filter)
    }

    render() {
        const {
            users,
            totalUsersCount,
            currentPage,
            pageSize,
            isFetching,
            followingInProgress,
            followTC,
            unfollowTC,
        } = this.props

        return <>

            {isFetching ? <Preloader /> : null}
                 <Users
                    users={users}
                    onChangedPageHandler={this.onChangedPageHandler}
                    onFilterChanged={this.onFilterChanged}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalUsersCount={totalUsersCount}
                    followingInProgress={followingInProgress}
                    unfollowTC={unfollowTC}
                    followTC={followTC}
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
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state),
    }
}


//HOK for UsersAPIComponent and next for Users(presentation component) ----------------------------------------------
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserTC,  followTC,
        unfollowTC, setCurrentPageAC }),
    // withAuthRedirect,
    )(UsersContainer)


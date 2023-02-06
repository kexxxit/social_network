import React from "react";
import {connect} from "react-redux";
import {
    setUsers, requestUsers, setPage, follow, unfollow
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import {
    getCurrentPage, getFollowingList,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/userSelectors";


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setPage(page, this.props.pageSize)
    }

    render() {

        return <>

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   setFollowingProgress={this.props.setFollowingProgress}
                   followingList={this.props.followingList}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingList: getFollowingList(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps,
    {setUsers, requestUsers, setPage, follow, unfollow})(UsersAPI)

export default UsersContainer
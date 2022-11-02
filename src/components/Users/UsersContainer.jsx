import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, setTotalUsersCount, setToggleFetching } from "../../redux/usersReducer";
import axios from "axios"
import Users from "./Users"
import Preloader from "../Common/Preloader/preloader";

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.setToggleFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setToggleFetching(false)
      })
    }
      onPageChanget = (pageNumber)=>{
        this.props.setToggleFetching(true)
        this.props.setCurrentPage(pageNumber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
          this.props.setUsers(response.data.items)
          this.props.setToggleFetching(false)
      })
    }

render(){
  return(
  <>
  {this.props.isFetching ? Preloader:null}
  <Users onPageChanget={this.onPageChanget} totalUsersCount={this.props.totalUsersCount}
  pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users}
  follow={this.props.follow} unFollow={this.props.unFollow} />

  </>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch)=>{
//     return {
//         follow: (userId)=>{
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount:(totalCount)=>{
//         dispatch(setTotalUsersCountAC(totalCount))
//     },
//     setToggleFetching:(isFetching)=>{
//         dispatch(setToggleFetchingAC(isFetching))
//     }
//     }
// }

export default connect(mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage,setTotalUsersCount, setToggleFetching,})(UsersContainer)
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { fetchUsers } from '../redux/user/userAction'

function UserContainer({ userData, fetchUsers }) {
    let data = localStorage.getItem('reduxState')
    useEffect(() => {
        fetchUsers()
        // !data && fetchUsers()
    }, [])
    return userData.loading ? (<h2>Loading </h2>) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
            <div>
                <h2>User List</h2>
                <div>
                    {/* {
                        data ?
                            JSON.parse(data).user && JSON.parse(data).user.users && JSON.parse(data).user.users.map(
                                user => <p key={user.id}>{user.name}</p>
                            ) :
                            userData && userData.users && userData.users.map(
                                user => <p key={user.id}>{user.name}</p>
                            )
                    } */}
                    {
                        userData && userData.users && userData.users.map(
                            user => <p key = {user.id}>{user.name}</p>
                        )
                    }
                </div>
                {/* <Link to="/">back</Link> */}
            </div>
        )
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

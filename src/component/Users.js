import React from "react"
import User from "./User"

class Users extends React.Component {
    render() {
        if (this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((user) => (
                        <User onDelete={this.props.onDelete} onEdit={this.props.onEdit}  key={user.id} user={user} />
                        ))}
                </div>
            )
        else
            return (
                <div className="user">
                    <h3>User list is empty</h3>
                </div>
            )
    }
}

export default Users
import React from "react"
import Header from "./component/Header"
import Users from "./component/Users"
import AddUser from "./component/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({ users: res.data.data })
        })

        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
        this.addUser = this.addUser.bind(this)
    }

    render() {
        return (
            <div>
                <Header title="users list" />
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>)
    }

    deleteUser(id) {
        this.setState({ users: this.state.users.filter((user) => user.id !== id) })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user
        this.setState({ users: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}

export default App 
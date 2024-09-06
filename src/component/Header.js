import React from "react"

class Header extends React.Component {
    render() {
        return (
            <header className="header">There is a header, and there is a {this.props.title}</header>
        )
    }
}

export default Header
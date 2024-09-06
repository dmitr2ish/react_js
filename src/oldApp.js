// import React from "react"
// import Header from "./component/Header"
// import Image from "./component/Image"
// import kitty from "./img/kitty.png"
// import Button from "./component/Button"

// class App extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             helpText: "Help text!",
//             userData: ""
//         }

//         this.inputClick = this.inputClick.bind(this)
//     }

//     componentDidUpdate(prevProp) {
//         if (this.state.userData !== "Gotcha")
//             console.log("I got you mfaka")
//     }

//     render() {
//         return (
//             <div>
//                 < Header title="There is a title" />
//                 <h1>{this.state.helpText}</h1>
//                 <h2>{this.state.userData}</h2>
//                 <input
//                     placeholder={this.state.helpText}
//                     onChange={event => this.setState({ userData: event.target.value })}
//                     onClick={this.inputClick}
//                     onMouseEnter={this.inputMouseEnter}
//                 />
//                 <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>

//                 <Image image={kitty} />
//                 <p><Button /></p>
//             </div>)
//     }

//     inputClick() {
//         this.setState({ helpText: "changed" })
//         console.log("Clicked")
//     }
//     inputMouseEnter() {
//         console.log("Mouse entered")
//     }
// }

// export default App 
import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <body style={{margin: '0px', padding: '0px', overflow: 'hidden'}}>
            <iframe title="VSCode IDE" src="https://vscode.dev" frameborder="0" style={{overflow: 'hidden', height: '100%', width: '100%'}} height="100%" width="100%"></iframe>
        </body>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo /> */}
        </header>
      </div>
    )
  }
}

export default App

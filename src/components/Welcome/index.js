// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false, action: 'Subscribe'}

  userSubscription = () => {
    const {isClicked} = this.state
    if (isClicked === false) {
      this.setState({action: 'Subscribed'})
      this.setState({isClicked: true})
    } else {
      this.setState({action: 'Subscribe'})
      this.setState({isClicked: false})
    }
  }

  render() {
    const {action} = this.state
    return (
      <div className="page-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button onClick={this.userSubscription} type="button">
          {action}
        </button>
      </div>
    )
  }
}

export default Welcome

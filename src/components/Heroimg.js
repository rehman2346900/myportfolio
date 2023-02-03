import React, {Component} from 'react'
import './Heroimg.css'

class Heroimg extends Component {
  render () {
      return (
        <div className="hero-img">
          <div className="heroimg">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      );
  }

}

export default Heroimg
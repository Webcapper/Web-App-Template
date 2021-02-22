/* eslint-disable */
import React from "react";
import '../style/main.css';
import axios from "axios";

class Index extends React.Component
{
    constructor(props){
        super(props);
        this.state =
        {

        }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.props.history.push("/");
  }

    render() {
        return (
          <div>

          </div>
        );
    }
}

export default Index;

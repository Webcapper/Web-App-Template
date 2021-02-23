/* eslint-disable */
import React from "react";
import '../style/main.css';
import actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from "axios";

const Index = () => {

  const dispatch = useDispatch();
  var state = useSelector(state => state);
  const history = useHistory();

  var handleChange = (event) => {

    actions.updateName.payload.name = event.target.value;
    dispatch(actions.updateName);
    
    console.log(state);
    //console.log(history);
  }

  var handleClick = (event) => {

    actions.updateRoll.payload.roll = "2018UGCS002R";
    dispatch(actions.updateRoll);

    actions.updateId.payload.id = "LC201";
    dispatch(actions.updateId);

    console.log(state);
    //console.log(history);
  }

  return (
    <div className="container">
      <form className="row mt-5">
        <div className="form-group">
          <label for="Name">Name</label>
          <input type="text" class="form-control" id="Name" placeholder="Name" onChange={handleChange}></input>
          <button type="button" className="btn waves-effect waves-light" onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Index;

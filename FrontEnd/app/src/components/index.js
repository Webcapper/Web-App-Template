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

    switch(event.target.id)
    {
      case 'name':
        actions.updateName.payload.name = event.target.value;
        dispatch(actions.updateName);
        break;

      case 'roll':
        actions.updateRoll.payload.roll = event.target.value;
        dispatch(actions.updateRoll);
        break;

      case 'id':
        actions.updateId.payload.id = event.target.value;
        dispatch(actions.updateId);
    }
    
  }

  var handleClick = (event) => {

    console.log(state);
    //console.log(history);
  }

  return (
    <div className="container">
      <form className="mt-5">
        <div className="form-group">
          <label for="Name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name" onChange={handleChange}></input>
        </div>
        <div className="form-group row">
          <label for="Roll">Roll</label>
          <input type="text" class="form-control" id="roll" placeholder="Roll" onChange={handleChange}></input>
        </div>
        <div className="form-group row">
          <label for="Id">Id</label>
          <input type="text" class="form-control" id="id" placeholder="Id" onChange={handleChange}></input>
        </div>
        <div className="form-group row">
          <button type="button" className="btn waves-effect waves-light" onClick={handleClick}>Show</button>
        </div>
      </form>
    </div>
  );
}

export default Index;

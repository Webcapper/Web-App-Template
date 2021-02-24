/* eslint-disable */
import React from "react";
import '../style/main.css';
import actions from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useGoogleLogout } from 'react-google-login';
import axios from "axios";

const Cart = () => {

  const dispatch = useDispatch();
  var state = useSelector(state => state);
  const history = useHistory();

  var viewShop = (event) => {
    history.push('/shopping');
  }

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

  const onLogoutSuccess = (res) => {
    history.push('/index');
    //console.log('Logged out Success');
    //alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    //console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId: '276593425300-604na80o4eu6n69crv65vubq4a1b3f5t.apps.googleusercontent.com',
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <nav className="grey darken-4">
        <div className="nav-wrapper m-5 ">
          <a href="#"><i class="material-icons brand-logo">store</i></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li>Hi,{state.name}</li>
            <li><a href="#"><i class="material-icons" onClick={viewShop}>shop</i></a></li>
            <li><i class="material-icons" onClick={signOut}>logout</i></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Cart;

import React, {Component} from "react";
import "./style.css";
import UserForm from './Components/UserForm';

export default class App extends Component {
render() {
  return (
    <div>
      <UserForm />
    </div>
  );
}
}
import React, { Component } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

// axios.defaults.withCredentials = true
// const headers = { withCredentials: true};
// 노드 서버에 데이터를 가져오는 작업시 노드 js url 주소와 같아야함
// localhost3000 , 노드 localhost 8080 와 일치시켜야 함

class LoginForm extends Component{
    render() {

        const formStyle = {
            margin: 50
          };
          const buttonStyle = {
            marginTop: 10
          };

        retrun (
            <div>
                LoginForm
            </div>
        );
                
    }
}
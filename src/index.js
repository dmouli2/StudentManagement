import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Addstudents from './components/addstudents';
import Liststudents from './components/liststudents';
import Test from './components/test';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer  from './redux/reducer';
import {ViewStudentsWrapper} from './components/WrapperComponent';
import {AddStudentsWrapper} from './components/WrapperComponent';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

                <a className="navbar-brand mr-1" href="">Student Management</a>

                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="">

                        <div className="">
                            <button className="btn btn-primary " type="button">
                                <i className="fas fa-search">Login</i>
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
            <div id="wrapper">

                <ul className="sidebar navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ color: 'white' }} exact to="/" >Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ color: 'white' }} exact to="/view" >List Students</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" activeStyle={{ color: 'white' }} exact to="/add" >Add Student</NavLink>
                    </li>


                </ul>






                <Route path="/" exact component={App} />
                <Route path="/add" exact component={AddStudentsWrapper} />
                <Route path="/view" exact component={ViewStudentsWrapper} />
            </div>
        </BrowserRouter>

    </Provider>












    , document.getElementById('root'));


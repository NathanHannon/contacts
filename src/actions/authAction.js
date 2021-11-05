import axios from "axios";
import { returnErrors } from './errorAction';
import {
    //Account
    USER_LOADED, USER_LOADING, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS,
    UPDATE_SUCCESS, UPDATE_FAIL, DELETE_FAIL,
    DELETE_SUCCESS,
    DELETE_ACCOUNT_SUCCESS, DELETE_ACCOUNT_FAIL, UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAIL, ACCOUNT_LOADED, ACCOUNT_FAILED,
} from './types';

// JSON header
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
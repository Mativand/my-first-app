import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
};
const mapDispatchToProps = () => {};

const  FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
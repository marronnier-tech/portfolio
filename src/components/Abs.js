import React from 'react'
import './style/Profile.css'

var path;
path = window.location.pathname.slice(1);

class Abs extends React.Component {
    render() {
        return (
            <h1 class="top-item">{path}</h1>
        )
    }
}

export default Abs;
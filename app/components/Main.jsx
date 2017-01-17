import React from 'react';
import Nav from 'Nav';

let Main = props => {
    return (
        <div>
          <Nav/>
            Main Component of Timer App
            {props.children}
        </div>
    );
}

export default Main;

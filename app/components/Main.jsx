import React from 'react';

let Main = props => {
    return (
        <div>
            Main Component Rendered.
            {props.children}
        </div>
    );
}

export default Main;

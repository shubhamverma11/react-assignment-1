import React from 'react'

const UserInput = (props) => {

    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div>
            <input type="text" onChange={props.changed} 
            value={props.currentName}
            style={inputStyle}/>
        </div>
    )
}

export default UserInput;

import React from "react";

function Todolist(props) {

    return (
        <div>
            <li onClick={() => {
                props.onChecked(props.id);
            }}>{props.text}</li>
        </div>
    );
}

export default Todolist;
import React from 'react'

function Email(props) {
    return (
        <div>
           <p>First Email : {props.email1}</p>
           <p>Second Email : {props.email2}</p>
           <p>Third Email : {props.email3}</p>
        </div>
    )
}

export default Email
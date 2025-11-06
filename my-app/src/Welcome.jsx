import React from 'react'



function Info(props) {
    return <div>
        <h2>Course Information</h2>
        <p>{props.details.course} -- {props.details.topic}  </p>
    </div>
}

// function Welcome(props) {
//   return (
//     <div>Welcome {props.name} in React Class
//     We are learning {props.topic} in {props.section}
//     </div>
//   )
// }

export default Welcome
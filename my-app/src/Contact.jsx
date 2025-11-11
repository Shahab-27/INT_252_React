import React from 'react'

function Contact({ cont1, cont2, cont3 }) {
    return (
        <div>
            <p>First Contact Number: {cont1}</p>
            <p>Second Contact Number: {cont2}</p>
            <p>Third Contact Number: {cont3}</p>
        </div>
    )
}

export default Contact
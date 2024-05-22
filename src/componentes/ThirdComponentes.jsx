import React from 'react'

export const ThirdComponentes = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Comunicacion entre componentes</h2>
            <ul>
                <li>{props.name}</li>
                <li>{props.lastname}</li>
                <li>{props.card.allergies}</li>
                <li>{props.card.bloodGroup}</li>

            </ul>

        </div>
    )
}

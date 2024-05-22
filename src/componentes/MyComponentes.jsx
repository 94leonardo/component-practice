import React from 'react'

const MyComponentes = () => {

    //variables
    const name = "Leonardo";
    const repository = "https://github.com/inesmariao/componente-practice";
    //objeto
    const student = {
        name: "leonardo",
        apellido: "lasso",
        movil: "31837922",
        linkedinProfile: "www.linkedin.com/in/leonardosantiagolassolara26aa92135"

    }
    //funciones
    console.log(student);

    return (
        <div>
            <hr />
            <p>Este es mi primer programa react</p>
            <h2>Temas de REACT</h2>
            <ul>
                <li>Componetes</li>
                <li>Eventos</li>
                <li>Comunicacion</li>
                <li>Estados - hoots</li>
            </ul>
            <hr />
            <h2>Datos del cliente</h2>
            <p>Nombre: {name}</p>
            <p>Repocitorio: </p>
            <p>{repository} </p>
            <hr />
            <h2>Datos del estudiante</h2>
            <p>Nombre: {student.name}</p>
            <p>Apellido: {student.apellido}</p>
            <p>Movil: {student.movil}</p>
            <p>Linkedin:</p>
            <p>{student.linkedinProfile}</p>


        </div>

    )
}

export default MyComponentes
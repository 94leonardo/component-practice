import React from 'react'

export const SegundoComponente = () => {
    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del príncipe",
        "Harry Potter y las Reliquias de la Muerte"
    ];
    return (
        <div>
            <h2>Listado Libros</h2>
            <ul>
                {books.length >= 1 ? (
                    books.map((book, index) => {
                        return <li key={index}>{book}</li>
                    })
                ) : "no existe libros."
                }
            </ul>
        </div>
    )
}

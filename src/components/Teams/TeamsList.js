import React from 'react'

const TeamsList = (props) => {

    const count = 1

    const rederedTeams = Object.values(props.teams).map(item => {
        return (
            <tr key={item._id}>
                <th scope="row">{count}</th>
                <td>{item._idUser.team}</td>
                <td>{item.date}</td>
                <td>{item.bonus}</td>
                <td>{item.status}</td>
                <td>{item._idUser.firstname}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Grupo</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {rederedTeams}
                </tbody>
            </table>
        </div>
    )
}

export default TeamsList;
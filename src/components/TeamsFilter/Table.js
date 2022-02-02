import React, { useState , useReducer } from 'react'
import Filter from './Filter';

const Table = (props) => {

    let count = 1

    const [dateBegin, setDateBegin] = useState('')
    const [dateFinal, setDateFinal] = useState('')
    const [cost, setCost] = useState(0)

    const filterData = () => {
        if (dateBegin == '') {
            return props.teams
        }
        if (dateBegin.trim().length > 0) {
            const newFilter = Object.values(props.teams).filter(item => {
                if (dateFinal.trim().length > 0 || dateFinal != '') {
                    return item.date >= dateBegin && item.date <= dateFinal
                }
                return item.date.includes(dateBegin)
            });

            return newFilter;
        }
        return props.teams
    }

    const costTotal = () => {
        const tempoResult = Object.values(filterData())
        var total = tempoResult.reduce((sum , value) => ( sum + value.bonus *5 ) , 0 )
        return total ;
    }
    
    const renderedTeams = Object.values(filterData()).map(item => {
        return (
            <tr>
                <th scope="row">{count}</th>
                <td>{item._idUser.firstname}</td>
                <td>{item._idUser.lastname}</td>
                <td>{item._idUser.team}</td>
                <td>{item.date}</td>
                <td>{item.bonus}</td>
                <td>{item.status}</td>
            </tr>
        )
    })

    return (
        <>
            <div>
                <div>
                    <label>
                        Fecha Inicial </label>
                    <input
                        type="date"
                        class="form-control"
                        value={dateBegin}
                        onChange={({ target: { value } }) => setDateBegin(value)}
                    />
                </div>
                <div>
                    <label>
                        Fecha Final
                    </label>
                    <input
                        type="date"
                        class="form-control"
                        value={dateFinal}
                        onChange={({ target: { value } }) => setDateFinal(value)}
                    />
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Dias</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedTeams}
                        <tr>
                            <th scope="row"></th>
                            <td style={{
                                fontWeight: 'bold'
                            }}>
                                Calcula multa
                            </td>
                      
                            <td>{costTotal()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;
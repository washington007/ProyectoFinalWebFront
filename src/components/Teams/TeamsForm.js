import React, { useState } from 'react'
import Button from '../UI/Button'

const TeamsForm = (props) => {

    const optionsReazonTeams = [
        { option: '1', label: 'Prestado' },
        { option: '2', label: 'Devuelto' }
    ]

    const [team, setTeam] = useState('')
    const [date, setDate] = useState('')
    const [bonus, setBonus] = useState('')
    const [status, setStatus] = useState('')
    const [user, setUser] = useState('')

    const onHandlerSubmit = (event) => {
        event.preventDefault();

        props.addNewTeams({
            '_idUser' : user,
            'date' : date,
            'bonus' : bonus,
            'status' : status
        })

        setTeam('');
        setDate('');
        setBonus('');
        setStatus('');
        setUser('');
    }

    const selectChooseOption = Object.values(props.users).map((item) => {
        return (
            <option value={item._id} name={item.team} id={item.team} >{item.firstname}</option>
        )
    })

    const selectChooseOptionReasonTeams = Object.values(optionsReazonTeams).map(item => {
        return (
            <option value={item.label} >{item.label}</option>
        )
    })

    const selectOneOption = (event) => {
        let index = event.target.selectedIndex;
        setUser(event.target.value)
        setTeam(event.target.options[index].id)
    }

    return (
        <div>
            <form onSubmit={onHandlerSubmit}>
                <div>
                    <div>
                    <label>Usuario</label>
                        <select
                            value={user} onChange={selectOneOption}>
                            <option value="--- seleccione ---" ></option>
                            {selectChooseOption}
                        </select>
                    </div>

                    <div>
                    <label>Equipo</label>
                    <input
                            value={team}
                            onChange={({ target: { value } }) => setTeam(value)}
                            disabled
                        />
                    </div>
                </div>

                <div>
                    <div>
                    <label>Fecha</label>
                        <input
                            type="date"
                            values={date}
                            onChange={({ target: { value } }) => setDate(value)}
                        />
                    </div>
                    <div>
                    <label>Grupo</label>
                        <input
                            type="number"
                            value={bonus}
                            onChange={({ target: { value } }) => setBonus(value)}
                        />
                    </div>
                </div>
                <div>
                    <div>
                    <label>Estado</label>
                    <select
                            className="form-control"
                            value={status} onChange={({ target: { value } }) => setStatus(value)}>
                            <option value="" >--- seleccione ---</option>
                            {selectChooseOptionReasonTeams}
                        </select>
                    </div>
                </div>
                <Button
                    type="submit"
                >
                    Guardar
                </Button>
            </form>
        </div>
    )
}

export default TeamsForm;


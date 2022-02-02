import React, { useState } from 'react'

import Button from '../UI/Button'
const UserForm = ( props ) => {

    const options = [
        { value: '1' , label : 'Holens'},
        { value: '2' , label : 'HTC'},
        { value: '3' , label : 'Oculus'},
    ]

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [team, setTeam] = useState('')

    const onHandlerSubmit = (event) => {
        event.preventDefault();

        props.addNewUser( {
            'firstname' : firstname,
            'lastname' : lastname,
            'team' : team
        })

        setFirstName('');
        setLastName('');
        setTeam('');
    }

    const selectChooseOption = Object.values(options).map( item => {
        return (
            <option value={item.label}>{item.label}</option>
        )
    })

    return (
        <div>
            <form onSubmit={onHandlerSubmit}>

                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={firstname}
                        onChange={({ target: { value } }) => setFirstName(value)}
                    />
                </div>

                <div>
                    <label>Apellido</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={({ target: { value } }) => setLastName(value)}
                    />
                </div>

                <div>
                    <label>Equipo</label>
                    <select
                        className="form-control" 
                        value={team} onChange={({ target: { value } }) => setTeam(value) }>
                            <option value="" >--- seleccione --</option>
                            {selectChooseOption}
                    </select>
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

export default UserForm;

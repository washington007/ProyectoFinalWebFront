import React, { useState, useContext } from 'react'
import TeamsForm from './TeamsForm'
import TeamsList from './TeamsList'
import CartContext from '../../store/cart-context'

const Teams = () => {

    const [status, setStatus] = useState(true);

    const cartCtx = useContext(CartContext);

    let content = (
        <TeamsList teams={cartCtx.teams} />
    )

    if (cartCtx.error) {
        content = ( <p style={{fontWeight: 'bold'}}>Error no se encuentra el equipo</p>)
    }

    if (cartCtx.loading) {
        content = 'Cargando equipo...';
    }

    const onHandlderStatus = () => {
        setStatus(!status);
    }

    const addNewTeams = (newTeams) => {
        cartCtx.addTeams(newTeams)
    }

    return (
        <div>
            <div>
                <h2>Equipos</h2>
                <button
                    type="button"
                    class={` ${status}`}
                    onClick={onHandlderStatus}
                >

                </button>
            </div>
            {status && (
                <TeamsForm users={cartCtx.users} addNewTeams={addNewTeams} />
            )}
            {content}

        </div>
    )
}

export default Teams

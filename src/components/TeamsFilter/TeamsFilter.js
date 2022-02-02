import React, { useContext } from 'react'
import Table from './Table';
import CartContext from '../../store/cart-context'

const TeamsFilter = () => {

    const cartCtx = useContext(CartContext);

    let content = (
        < Table teams={cartCtx.teams} />
    )

    if (cartCtx.error) {
        content = ( <p style={{fontWeight: 'bold'}}>Error no se encuentra lo que se esta filtrando</p>)
    }

    if (cartCtx.loading) {
        content = 'Cargando la tabla filtrada...';
    }

    return (
        <div>
            <h2>Filtrar Fechas</h2>
            {content}
        </div>
    )
}

export default TeamsFilter

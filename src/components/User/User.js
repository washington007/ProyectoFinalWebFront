import React, { useState, useEffect, useContext } from 'react'

import UserList from './UserList'
import UserForm from './UserForm'

import CartContext from '../../store/cart-context'

const User = () => {

    const [status, setStatus] = useState(true);

    const cartCtx = useContext(CartContext);

    let content = (
        <UserList users={cartCtx.users} />
    )

    if (cartCtx.error) {
        content = ( <p style={{fontWeight: 'bold'}}>Error no se encuentra el usuario</p>)
    }

    if (cartCtx.loading) {
        content = 'Usuario cargando';
    }

    const addNewUser = (newUser) => {
        cartCtx.addUser(newUser);
    }

    const onHandlderStatus = () => {
        setStatus(!status);
    }

    return (
        <div>
            <div>
                <h2>Usuario</h2>
                <button
                    type="button"
                    class={`${status }`}
                    onClick={onHandlderStatus}
                >

                </button>
            </div>
            {status && (
                <UserForm addNewUser={addNewUser} />
            )}
            {content}
        </div>
    )
}

export default User

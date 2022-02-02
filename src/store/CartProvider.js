import { useEffect, useState } from 'react';
import useHttp from '../config/use-http'

import CartContext from './cart-context';

const CartProvider = (props) => {

  const [users, setUsers] = useState([])
  const [teams, setTeams] = useState([])

  const fetchDataUsers = (users) => {
    setUsers(users)
  }

  const fetchDataTeams = (data) => {
    setTeams(data);
  }

  const addOneUser = (newUser) => {
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        newUser
      ]
    })
  }

  const addOneTeamsToList = (data) => {
    setTeams(prevTeams => {
      return [
        ...prevTeams,
        data
      ]
    })
  }

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {

    fetchData(
      { url: '/user/getAllUsers' },
      fetchDataUsers
    )

    fetchData(
      { url: '/teams/getAllTeams' },
      fetchDataTeams
    )

  }, [])

  const addNewUser = (newUser) => {
 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    fetchData(
      {
        url: '/user/createUser',
        method: 'POST',
        body: newUser,
        headers: myHeaders,
      },
      addOneUser
    )
  }

  const addNewTeams = (newTeams) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    fetchData(
      {
        url: '/teams/createTeams',
        method: 'POST',
        headers: myHeaders,
        body: newTeams
      },
      addOneTeamsToList
    )
  }

  const cartContext = {
    users: users,
    teams : teams,
    addUser: addNewUser,
    addTeams : addNewTeams,
    isLoading : isLoading, 
    error : error
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

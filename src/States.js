import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'

const setStates = React.createContext()

const StateProvider = (props) =>{
    const [name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [field, setField] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const [Pass, setPass] = useState('')

    
    return (
        <setStates.Provider value={{
            type, setType, field, setField, name, setName, Email, setEmail, id, setId, Pass, setPass
        }}>
        {props.children}
        </setStates.Provider>
    )
}

export {setStates, StateProvider}
import React, {useState} from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = ({onSubmitName}) => {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleChange = (event) =>{
        setName(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if (name.trim() === '') return
        onSubmitName(name)
        navigate('/game')

    }

  return (
    <div className="Main-container">
        <div className="greeting">
            <h1>Hey, Welcome! Please Enter your user name </h1>
        </div>

        <div className="Form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">
                    Name:
                    <input id="username" 
                    type="text" value={name}
                    onChange={handleChange}
                    placeholder="e.g BreezyGod"
                    />
                </label>
                <button type='submit' disabled={!name.trim()}>
                    submit
                </button>
            </form>
        </div>
    </div>
  )
}   

export default Welcome
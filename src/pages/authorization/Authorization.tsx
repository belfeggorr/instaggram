import { useState } from 'react'
import './Authorization.css'
import { authUser } from '../../store/reducer/user/userAction';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
const Authorization = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(
            authUser({
                username,
                password
            })
        );
        setUsername('');
        setPassword('');
        navigate('/')

    }
    return (
        <div className="Authorization">
            <div className='Authorization__name'  >instagram</div>
            <input className='Authorization__login'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input className='Authorization__password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} className='Authorization__btn'>Войти</button>


        </div>
    )
}

export default Authorization

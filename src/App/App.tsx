import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Authorization from '../pages/authorization/Authorization'
import Home from '../pages/Home'
import { setTokenBaseService } from '../Api/url'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { validationToken } from '../store/reducer/user/userAction'

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector((state) => state.user)
  const handleAuth = async () => {
    try {
      setTokenBaseService();
      await dispatch(validationToken()).unwrap();
      navigate('/');
    } catch (error) {
      console.error("Authentication failed:", error)
      navigate('/sign-in');
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className='App'>
      <Routes>
        {isAuth ? (
          <Route path='/' element={<Home />} />
        ) : (

          <Route path='/sign-in' element={<Authorization />} />


        )}

      </Routes>
    </div>
  )
}

export default App

import './Header.css'
import Home from '../../assets/Home.svg';
import lightning from '../../assets/lightning.svg'
import plus from '../../assets/plus.svg'
import compas from '../../assets/compas.svg'
import likes from '../../assets/likes.svg'
import avatar from '../../assets/avatar.svg'
const Header = () => {
  return (
    <div className="Header">
      <div className='header__elements'>
        <h1 className='header__name'>instagram</h1>
        <input className='header__input' />
        <div className='header__btn'>
          <button className='header__home' ><img src={Home} alt="" /></button>
          <button className='header__lightning'><img src={lightning} alt='' /></button>
          <button className='header__plus'><img src={plus} alt='' /></button>
          <button className='header__compas'><img src={compas} alt='' /></button>
          <button className='header__likes'><img src={likes} alt='' /></button>
          <button className='header__avatar'><img src={avatar} alt='' /></button>
        </div>
      </div>
    </div>
  )
}

export default Header

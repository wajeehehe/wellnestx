import React from 'react'
import { useNavigate } from 'react-router-dom'
//import logo from 'logo.png'

const Home = (props) => {
  const { loggedIn, email } = props
  let navigate = useNavigate(); 

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem('user')
      props.setLoggedIn(false)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="mainContainer">
      <div className={'leftHalf'}>

      </div>
      <div className='rightHalf'>
        <div className={'titleContainer'}>
          <div>Welcome!</div>
        </div>
        <div>This is the home page.</div>
        <div className={'buttonContainer'}>
          <input
            className={'inputButton'}
            type="button"
            onClick={onButtonClick}
            value={loggedIn ? 'Log out' : 'Log in'}
          />
          {loggedIn ? <div>Your email address is {email}</div> : <div />}
        </div>
      </div>
    </div>
  )
}

export default Home
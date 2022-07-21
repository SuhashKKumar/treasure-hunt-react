import React from 'react'
import '../styles/Cookies.css'
import Buttons from './Buttons';
import Fade from 'react-reveal/Fade';

const Cookies = ({cookies, setCookies}) => {
    const CookiesHandler=()=>{
      setCookies(!cookies)
    }
   
    const styles ={
        cookies:{
            display: cookies ? "flex" : "none",
             opacity: cookies ? "1" : "0",
            }
        }
  return (
    <div className='cookies_container' style={styles.cookies}>
    <Fade bottom>

        <div className='cookies' >
        <h3>Cookies</h3>
        <h4>Just Kidding, Keep Hunting</h4>
        <Buttons name='Continue Hunting' CookiesHandler={CookiesHandler} />
        </div>
    </Fade>
    </div>
  )
}

export default Cookies
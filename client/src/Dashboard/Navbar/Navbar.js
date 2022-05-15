import React from 'react'
import Style from './Styles'
function Navbar() {
  return (
    <div style={Style.navbar}>
        <div style={Style.brand}>
             Tasks Board
        </div>
        <div style={Style.usericoncontainer}>
             <img style={Style.usericon} src ='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
    </div>
  )
}

export default Navbar
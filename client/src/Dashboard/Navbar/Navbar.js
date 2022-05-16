import axios from 'axios'
import React,{useState} from 'react'
import Style from './Styles'
function Navbar() {
  const [imageUrl, setimageUrl] = useState('');
  function getUrl(){
    
    axios.get(`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/info`).then((res)=>{
      if(res.status === 200){
        setimageUrl(res.data.download_url);
      }
    })
  }
  return (
    <div style={Style.navbar}>
        <div style={Style.brand}>
             Tasks Board
        </div>
        <div style={Style.usericoncontainer}>
             <img style={Style.usericon} src ={imageUrl} onLoad={getUrl()}/>
        </div>
    </div>
  )
}

export default Navbar
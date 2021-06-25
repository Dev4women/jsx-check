
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg'


function App() {
  return (

<div>
  
  <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

<h1 className='title-red'>Checkpoint JSX</h1>

<div > <br/> </div>

<img src={imageInSrc} alt='imageInSrc'/>

<div > <br/> </div>

<img src="/imageInPublic.jpg" alt="imageInPublic"/>

</div>

<video style={{width:320, height:240}}></video>
<source src="./myVideo.mp4" type="video/mp4"/>

</div>

  );
  }


export default App;

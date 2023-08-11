import { useEffect } from 'react';
import './main.css'
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/Register');
    },2500);
    return () => clearTimeout(timeoutId);
  }, [navigate])
  return (
    <>
    <div className='main2'>
    <div className='main1 parent'>
    <img class='image1' src="./image/bg2.jpg"/> 
    <img class='image2' src="./image/bg3.png" />    

    </div>
    <div className='main-text text-slide-in'>
    <h6 class="">vishART</h6><h7>"Creativity takes courage. I found I could say things with color and shapes that I couldn't say any other way—things I had no words for"</h7>
    </div>
    
    </div>
   </>
  );
}

export default Component ;

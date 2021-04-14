import React,{useState} from 'react';

const Modal = ({showModal,setShowModal,name,front,back,id,height,weight,abilities}) => {
  
  const [turned,setTurned] = useState(true);

  const turnPokemon = (e) => {
      e.stopPropagation();
      setTurned(prev => !prev)
  }
  

  const meters= ((height/39.37)*4).toFixed(2); //please dont ask why *4, i just tested until it came to the real google height
 
  return (
    <>
    {showModal ? 
      <div className='background'>
        <div className='wrapper'>
          <div className='title'>
            {name} <span>#{id}</span>
          </div>
          <div className='content'>
            <div className='physical'>
              <p><span>Height:</span> {height}' <i>({meters}m)</i></p>
              <p><span>Weight:</span> {weight/10}kg</p>
            </div>
            <div className='abilities'>
              Abilities:
              <div className='skill1'></div>
              <div className='skill2'></div>
              <div className='skill3'></div>
              <div className='skill4'></div>
            </div>
          </div>
          <div className='profile'>
            <img className='profilePic' src={turned ? front : back} alt={name+"'s front"} />
            <img className='rotate' src={'https://cdn.iconscout.com/icon/premium/png-512-thumb/rotate-video-674526.png'} onClick={turnPokemon} alt='Click to turn the pokemon around'></img>
          </div>
        </div>
      </div>
    : null}
    </>
  );
}

export default Modal

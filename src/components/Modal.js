import React,{useState,useEffect} from 'react';

const Modal = ({showModal,setShowModal,name,front,back,id,height,weight,abilities,type1,type2}) => {
  
  const [turned,setTurned] = useState(true);
  const turnPokemon = (e) => {
      e.stopPropagation();
      setTurned(a => !a)
      console.log(type1.type.name)
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
              <div className='height'><b>Height:</b> {height}'({meters}m) </div>
              <div className='weight'><b>Weight:</b> {weight/10}kg </div>
            <div className='abilities'>
              <p>Abilities</p>
              <div className='slot1'>{(abilities[0]) ? (abilities[0].ability.name) : (<></>)}</div>
              <div className='slot2'>{(abilities[1]) ? (abilities[1].ability.name) : (<></>)}</div>
              <div className='slot3'>{(abilities[2]) ? (abilities[2].ability.name) : (<></>)}</div>
              <div className='slot4'>{(abilities[3]) ? (abilities[3].ability.name) : (<></>)}</div>
            </div>
            <div className='types'>
               <div className='type1'>{(type1) ? (type1.type.name.toUpperCase()) : (<></>)}</div>
               <div className='type2'>{(type2) ? (type2.type.name.toUpperCase()) : (<></>)}</div>
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

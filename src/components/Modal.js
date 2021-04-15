import React,{useState} from 'react';

const Modal = ({showModal,setShowModal,pokemon}) => {
  
  const [turned,setTurned] = useState(true);
  const turnPokemon = (e) => {
      e.stopPropagation();
      setTurned(a => !a)
      console.log(type1.type.name)
  }

  const {name,id,sprites,height,weight,abilities,types} = pokemon;
  const {"generation-v":generationv} = sprites.versions;
  const {"black-white":black} = generationv;
  const {animated} = black
  const {"0":type1,"1":type2} = types;
  const capitalizedName= (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
  const formattedId = ('000'+id).slice(-3);
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
            <img className='profilePic' src={turned ? animated.front_default : animated.back_default} alt={name+"'s front"} />
            <img className='rotate' src={'https://cdn.iconscout.com/icon/premium/png-512-thumb/rotate-video-674526.png'} onClick={turnPokemon} alt='Click to turn the pokemon around'></img>
          </div>
        </div>
      </div>
    : null}
    </>
  );
}

export default Modal

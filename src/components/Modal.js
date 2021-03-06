import React,{useState} from 'react';

const Modal = ({showModal,setShowModal,pokemon,left,right,turnModal}) => {
  
  const [turned,setTurned] = useState(true);
  const turnPokemon = (e) => {
      e.stopPropagation();
      setTurned(a => !a);
  }

  const {name,id,sprites,height,weight,abilities,types} = pokemon;
  const {"generation-v":generationv} = sprites.versions;
  const {"black-white":black} = generationv;
  const {animated} = black;
  const {"0":type1,"1":type2} = types;
  const capitalizedName = (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
  const formattedId = ('000'+id).slice(-3);
  const meters = ((height/39.37)*4).toFixed(2); //please dont ask why *4, i just tested until it came to the real google height
  const style1 = type1 ? type1.type.name : 'none';
  const style2 = type2 ? type2.type.name : 'none'; //sorry, i know this is terrible but i want to turn this work in time
  
  

  return (
    <>
    {showModal ? 
      <div className='background'>
        <div className='exit' onClick={()=>{setShowModal(false)}}> Close </div>
        <div className='wrapper'>
          
          <div className='left' onClick={()=>{turnModal(left.id);}}>
            {(left.name.replace('-',' ').charAt(0).toUpperCase()+left.name.slice(1))}
          </div>
          <div className='right' onClick={()=>{turnModal(right.id);}}>
          
          {(right.name.replace('-',' ').charAt(0).toUpperCase()+right.name.slice(1))}
          </div>
          <div className='title'>
            {capitalizedName} <span>#{formattedId}</span>
          </div>
          <div className='content'>
              <div className='height'><b>Height:</b> {height}'({meters}m) </div>
              <div className='weight'><b>Weight:</b> {weight/10}kg </div>
            <div className='abilities'>
              <p>Abilities</p>
              {/* this is bad */}
              <div className='slot1'>{(abilities[0]) ? (abilities[0].ability.name) : (<></>)}</div> 
              <div className='slot2'>{(abilities[1]) ? (abilities[1].ability.name) : (<></>)}</div>
              <div className='slot3'>{(abilities[2]) ? (abilities[2].ability.name) : (<></>)}</div>
              <div className='slot4'>{(abilities[3]) ? (abilities[3].ability.name) : (<></>)}</div>
            </div>
            <div className='types'>
               <div className={style1}>{(type1) ? (type1.type.name.toUpperCase()) : (<></>)}</div>
               <div className={style2}>{(type2) ? (type2.type.name.toUpperCase()) : (<></>)}</div>
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

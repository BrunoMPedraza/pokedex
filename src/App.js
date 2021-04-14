import React from 'react'; 

import Searchbar from './components/Searchbar';
import Pokegrid from './components/Pokegrid';
import './index.css';

export default function App () {
    return(
        <div>
            <Searchbar />
            <Pokegrid/>
            <div className='App'>
                
            </div>
        </div>
    )
}
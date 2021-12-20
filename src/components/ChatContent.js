import React from 'react'
import Alex from './Alex';
import Doctor from './Doctor';
import Gust from './Gust';
import Pikachu from './Pikachu';
import Stack from './Stack';

function ChatContent({id}) {
    
   
    return (
        <div>
            {id===0 ?<Doctor /> : id===1 ? 
          <Stack/> 
                
                
                : id===2 ? <Alex/> : 
        
        id===3 ? 
        <Gust/>    : 
    
    <Pikachu/>
            
            }

        </div>
    )
}

export default ChatContent

import React,{useState} from "react";
import "../css/chat.css";
import TelegramIcon from '@material-ui/icons/Telegram';

function Chatbox() {

    const[isExp,setExp]=useState("false");
    const[prevUserMessage,setPrevUserMessage]=useState([]);
    const[userMessege,setUserMessege]=useState("");
    const exp=()=>{setExp(!isExp);};
    const  getTime=()=>{
        let today = new Date();
        let hours =today.getHours();
        let minutes=today.getMinutes();
        if(hours<10){hours="0"+hours;}
        if(minutes<10){minutes="0"+minutes;}
        return hours+":"+minutes;
    };
    const textInput=React.useRef();
    
    

    return (
        <div className="chat_bar_collapsible">
            <button id="chat_button" type="button" className={isExp ? "collapsible" : "collapsible active"}
            onClick={exp}
            >CHATBOX</button>

             <div className={isExp ? "content" : "content setMaxWidth"}>
                 <div className="full_chat_block">
                     <div className="outer_container">
                         <div className="chat_container">
                             <div id="chatbox">
                                 <h5 id="chat_time_stamp">{!isExp ? getTime() : "00:00"}</h5> 
                                 <p id="botStarterMessage" className="botText">
                                     <span>Loading..</span>
                                </p> 

                                 <p></p>

                             </div>
    

              <div className="chat_bar_input_block">
                 <div id="userInput">
              <input type="text" className="input_box" id="textInput" name="msg" 
              onChange={(e)=>setUserMessege(e.target.value)}
              ref = {textInput}
              placeholder="Tap 'Enter' to send message"/>
                 <p></p>
               </div>
    <div className="chat_bar_icons">
        {/* Send Message */}
        <TelegramIcon onClick={()=>{setPrevUserMessage([...prevUserMessage,userMessege]); 
            setUserMessege("");
            (textInput.current.value = "")} }/>

    </div>
</div>
<div id="chat_bar_bottom">
    
</div>



                         </div>
                     </div>
                 </div>
             </div>
            
        </div>
    )
}






export default Chatbox

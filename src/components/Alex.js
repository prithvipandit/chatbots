import React,{useState,useEffect}  from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import alex from "../images/xg.png";
import dp from "../images/usr.jpeg";
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';
import axios from 'axios';



function Alex() {

    const[userMessege,setUserMessege]=useState("");
    const[prevMessage,setPrevMessage]=useState([]);
    const[updateSingle,setUpdateSingle]=useState([]);
    const textInput=React.useRef();
    const messagesRef = React.useRef(null);
    const scrollToBottom = () => {
       messagesRef.current.scrollIntoView({
          behavior: "smooth",
          
      });
  };


  useEffect(()=>{
    const data=localStorage.getItem("doc2");
    if(data){
        const bask = JSON.parse(data);
    setPrevMessage([...bask]);
    }
},[])

    useEffect(()=>{
        localStorage.setItem("doc2",JSON.stringify(prevMessage));
    },[prevMessage])

  React.useEffect(() => {
    if (messagesRef.current) {
      scrollToBottom();
    }
  }, [prevMessage]);

  
 


  const options = {
    method: 'POST',
    url: 'https://personality-traits.p.rapidapi.com/personality',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      'x-rapidapi-host': 'personality-traits.p.rapidapi.com',
      'x-rapidapi-key': '16f1b25764mshc9dd4c69693d925p11a565jsnee7e0c128a26'
    },
    data: [{id: '1', language: 'en', text: userMessege}]
  };


 
  
    
    return (
        <div>
            <div className="full_chat_block">
                <div className="outer_container">
                    <div className="chat_container"> 
                   
                        <div id="chatbox">
                        <h5 id="chat_timestamp">Chat Starts from Here</h5>
                            <p id="botStarterMessage" className="botText">
                                <p className="botText">
                                    <img src={alex} alt="Doctor-Image" className='small-img'/>
                                       <span><div className="msgtxt">Hi, this is Magus</div></span>
                                    </p>
                                </p> 
                                
                                {/* <p className="userText">
                                    <span><div className='msgtxt'>Hey Olivia , Did you get a chance to see the venue?</div></span>
                                    <img src={dp} className='small-img'/>
                                 </p> */}

                                
                                
                                 {prevMessage.map((e)=>
                                  
                                 
                                 e.user ? <p key={e.id} className="userText">
                                 <span><div className='msgtxt'>{e.messege}</div></span>
                                 <img src={dp} className='small-img'/>
                              </p> : <p key={e.id} className="botText">
                                    <img src={alex} alt="Doctor-Image" className='small-img'/>
                                    <span><div className="msgtxt">{e.messege}</div></span>
                                </p>
                                 )}
                                 <div ref={messagesRef} /> 
                        </div>    
                         </div>
                         
                     </div>
                 </div>
                 <div className="chat_bar_input_block">
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <EmojiEmotionsIcon fontSize="large" style={{fill: "light black"}}
                  
                  onClick={()=>{
                    if(userMessege.length>0){
                        setPrevMessage(
                            [...prevMessage,
                               {messege : "#"+userMessege,user : false,id:prevMessage.length}
                           ]);
                        setUserMessege("");
                        textInput.current.value = "";
                    }
                } }
                  />
                  <span>&nbsp;</span>
                  <EmojiSymbolsIcon fontSize="large" style={{fill: "light black"}}/>
                  <span>&nbsp;&nbsp;</span>

                <div id="userInput">
                    <input type="text" className="input_box" id="textInput" name="msg" onChange={(e)=>setUserMessege(e.target.value)} ref = {textInput} placeholder="Tap 'Enter' to send message"
                    
                    onKeyPress={(e) => {if(e.key === 'Enter'){
                        
                       if(userMessege.length>0){
                        setPrevMessage(prevMessage=>{
                          return   [...prevMessage,
                                {messege : userMessege,user : true,id:prevMessage.length}
                            ]
                        });
                           
                           textInput.current.value = "";
                          
                       }
                       axios.request(options).then(function (response) {
                           
                        response.data[0].predictions.map(item=>{
                            setPrevMessage(
                                prevMessage=>{
                                    return [...prevMessage,
                                        {messege : "Prediction : "+item.prediction+" || Probablity : "+item.probability
                                        
                                        ,user : false,id:prevMessage.length}
                                    ]
                                }
                                );
                        })
                        
                       
                    }).catch(function (error) {
                        console.error(error);
                    }); setUserMessege("");
                    }     }  }


                    />
                 <p></p>
             </div>
    <div className="chat_bar_icons">
        {/* Send Message */}
        <TelegramIcon fontSize="large" style={{fill: "#0088cc"}}
         onClick={()=>{
             if(userMessege.length>0){
                setPrevMessage(
                    prevMessage=>{
                        return [...prevMessage,
                            {messege : userMessege,user : true,id:prevMessage.length}
                        ]
                    }
                    );
                   
                textInput.current.value = "";
                axios.request(options).then(function (response) {
                           
                    response.data[0].predictions.map(item=>{
                        setPrevMessage(
                            prevMessage=>{
                                return [...prevMessage,
                                    {messege : "Prediction : "+item.prediction+" || Probablity : "+item.probability
                                    
                                    ,user : false,id:prevMessage.length}
                                ]
                            }
                            );
                    })
                    
                   
                }).catch(function (error) {
                    console.error(error);
                });setUserMessege("");
             }
            
             
            
             
         } }   />

 <DeleteSweepRoundedIcon onClick={()=>{
     setPrevMessage([]);
     
 }

 } fontSize="large" style={{fill:"light black"}}/>
    </div>
   
              </div>
            </div>
    )
}




export default Alex

import React,{useState,useEffect} from "react";
import ChatContent from "./ChatContent";
import Doctor from "../images/xe.png";
import Mechanic from "../images/xf.png";
import cowboy from "../images/xg.png";
import dp from "../images/usr.jpeg";
import eva from "../images/eva.png";
import alex from "../images/alex.png";
import backBanner from "../images/bnr.png";
import { Link,useHistory } from 'react-router-dom';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';



function Home() {
    const history = useHistory();
    const  getTime=()=>{
        let today = new Date();
        let hours =today.getHours();
        let minutes=today.getMinutes();
        if(hours<10){hours="0"+hours;}
        if(minutes<10){minutes="0"+minutes;}
        return today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+" || "+hours+":"+minutes;
    };

    const[chatNumber,setChatNumber]=useState(0);
    const[date0,setdate0]=useState("X/X/202X || 00:00");
    const[date1,setdate1]=useState("X/X/202X || 00:00");
    const[date2,setdate2]=useState("X/X/202X || 00:00");
    const[date3,setdate3]=useState("X/X/202X || 00:00");
    const[date4,setdate4]=useState("X/X/202X || 00:00");//
   



    useEffect(()=>{
        const id = localStorage.getItem("id");
        if(id){setChatNumber(JSON.parse(id));}
    },[]);

    useEffect(()=>{
        localStorage.setItem("id",JSON.stringify(chatNumber));
    },[chatNumber]);

    useEffect(()=>{
        const a = localStorage.getItem("a");
        if(a){setdate0(JSON.parse(a));}
    },[]);

    useEffect(()=>{
        localStorage.setItem("a",JSON.stringify(date0));
    },[date0]);

    useEffect(()=>{
        const b = localStorage.getItem("b");
        if(b){setdate1(JSON.parse(b));}
    },[]);

    useEffect(()=>{
        localStorage.setItem("b",JSON.stringify(date1));
    },[date1]);

    useEffect(()=>{
        const c = localStorage.getItem("c");
        if(c){setdate2(JSON.parse(c));}
    },[])

    useEffect(()=>{
        localStorage.setItem("c",JSON.stringify(date2));
    },[date2]);

    useEffect(()=>{
        const d = localStorage.getItem("d");
        if(d){setdate3(JSON.parse(d));}
    },[]);

    useEffect(()=>{
        localStorage.setItem("d",JSON.stringify(date3));
    },[date3]);
    useEffect(()=>{
        const e = localStorage.getItem("e");
        if(e){setdate4(JSON.parse(e));}
    },[]);

    useEffect(()=>{
        localStorage.setItem("e",JSON.stringify(date4));
    },[date4]); 


  
    return (
        <div>
        <div id='top' className='intoflex'> 
            <div id='top-left' className='colorred italk'>
                 ChatBots</div>
                
     {/* <img className='checkout__banner' src={backBanner} alt='Amazon Banner'/> */}
           {/* <div id='top-middle' className='intoflex'>
                <a id='top-grps' className='animateborderleft'><i className="fas fa-user-friends"></i> Groups</a>
                <a className='redborder colordark'><i className="fas fa-envelope colorred"></i> Messages</a>
                <a id='top-vdo' className='animateborderright'><i className="fas fa-video"></i> Video Calls</a>
            </div> 
           <div id='top-right' className='intoflex'>
            <i className="far fa-question-circle"></i>
            <i className="far fa-bell colorred"></i>
            <img src='https://d1qb2nb5cznatu.cloudfront.net/users/8484751-large?1553530955'
            className='small-img'/>
            <div className="colordark">Sushmita Pandey</div>
            <i className="fas fa-caret-down"></i>
            </div>  */}
        </div>
        {/* <div className="middle">
            <img className="banner__chatbots" src=""/>
            
        </div> */}
        <div id='whole' className='intoflex'>
        
        <div id='left'>  
            <div id='left-head' className='center'>
             <img src={dp} alt="profile-picture"
            className='large-img'/> 
            <div className='colordark bigf'>Hello Guest</div>
            <div className='smallf'>Stay Connected</div>
            </div>
            <div id='left-menu'>
             <div className='redbox'> Messages</div>
            
            
            <div className={chatNumber===0 ?'colorred leftpad':'leftpad'} onClick={()=>setChatNumber(0)}>
            {chatNumber ===0 ?  <> <span>AVA</span></> :<span>AVA</span> }</div>
                
            <div className={chatNumber===1 ?'colorred leftpad':'leftpad'} onClick={()=>setChatNumber(1)}>
            {chatNumber ===1 ?  <> <span>EVA</span></> :<span>EVA</span> }</div>
            <div className={chatNumber===2 ?'colorred leftpad':'leftpad'} onClick={()=>setChatNumber(2)}>
            {chatNumber ===2 ?  <> <span>Magus</span></> :<span>Magus</span> }</div>
            <div className={chatNumber===3 ?'colorred leftpad':'leftpad'} onClick={()=>setChatNumber(3)}>
            {chatNumber ===3 ?  <> <span>Waifu</span></> :<span>Waifu</span> }</div>
            <div className={chatNumber===4 ?'colorred leftpad':'leftpad'} onClick={()=>setChatNumber(4)}>
            {chatNumber ===4 ?  <> <span>Doctor</span></> :<span>Doctor</span> }</div>
           
           
            {/* <div className='colordark whitebox' onClick={
                ()=>{
                    localStorage.setItem("doc","[]");
                    localStorage.setItem("doc1","[]");
                    localStorage.setItem("doc2","[]");
                    localStorage.setItem("doc3","[]");
                    localStorage.setItem("doc4","[]");
                }
            } >Delete all chat</div> */}
            
        </div>
        </div>
        <div id='right'>
        <div id='chat-header' className='intoflex spacebetween'>
            <div  className="colordark verybigf"> Messages</div>
        </div>
        
        <div id='chats' className='intoflex'>
            <div id='chats-left'>
                <div id='chats-left-header' className='intoflex spacebetween chatbox'>
               
            <div>Chats</div>
            
                </div>
                <div id='chats-left-content'>
                    <div className={chatNumber===0 ? "chatbox orangebox" : "chatbox"} onClick={()=>{setChatNumber(0);
                    setdate0(getTime())}}>
                    <div className='intoflex first'>
                        <img src={alex} alt="eva"
                        className='medium-img'/>
                        <div className='verticalflex'>
                        <div className={chatNumber===0 ? "colorred" : ""}>ACO</div>
                        <div className='smallf'>Enthusiastic Loving and Smart</div>
                        </div>
                    </div>
                    <div className='intoflex spacebetween verysmallf'>
                        
                            <div>{date0}</div> 
                        
                       
                    </div>
                    </div>

                    <div className={chatNumber===1 ? "chatbox orangebox" : "chatbox"} onClick={()=>
                        {setChatNumber(1);setdate1(getTime());} }>
                    <div className='intoflex first'>
                        <img src={Mechanic} alt="alex"
                        className='medium-img'/>
                        <div className='verticalflex'>
                        <div className={chatNumber===1 ? "colorred" : ""}>EVA</div>
                        <div className='smallf'>Formal Workholic and Pleasent</div>
                        </div>
                    </div>
                    <div className='intoflex spacebetween verysmallf'>
                    <div>{date1}</div>
                       
                    </div>
                    </div>

                    <div className={chatNumber===2 ? "chatbox orangebox" : "chatbox"} onClick={()=>
                        {setChatNumber(2) ;setdate2(getTime());} }>
                    <div className="intoflex first">
                        <img src={cowboy} alt="cowboy"
                        className='medium-img'/>
                        <div className='verticalflex'>
                        <div className={chatNumber===2 ? "colorred" : ""}>Magus</div>
                        <div className='smallf'>Predicts words and finds probability </div>
                        </div>
                    </div>
                    <div className='intoflex spacebetween verysmallf'>
                    <div>{date2}</div>
                    </div>
                    </div>

                    <div className={chatNumber===3 ? "chatbox orangebox" : "chatbox"} onClick={()=>
                        {setChatNumber(3);setdate3(getTime());}}>
                    <div className="intoflex first">
                        <img src={eva} alt="Cartoon-Mechanic"
                        className='medium-img'/>
                        <div className='verticalflex'>
                        <div className={chatNumber===3 ? "colorred" : ""}>Waifu</div>
                        <div className='smallf'>Silly One</div>
                        </div>
                    </div>
                    <div className='intoflex spacebetween verysmallf'>
                    <div>{date3}</div>
                        
                    </div>
                    </div>

                    <div className={chatNumber===4 ? "chatbox orangebox" : "chatbox"} onClick={()=>
                        {setChatNumber(4);setdate4(getTime());}}>
                    <div className='intoflex first'>
                        <img src={Doctor} className='medium-img' alt="pikachu-doctor-image"/>
                        <div className='verticalflex'>
                        <div className={chatNumber===4 ? "colorred" : ""}>Doctor</div>
                        <div className='smallf'>++ Under Construction API ++</div>
                        </div>
                    </div>
                    <div className='intoflex spacebetween verysmallf'>    
                    <div>{date4}</div>
                    </div>
                    </div>
                </div>
            </div>
            <div id='chats-right'>
                <div id='chats-right-header' className='intoflex border-bottom'>
                    <div id="replies" className='colordark redborder'> 
                    
                    {
                        chatNumber===0 ? <div className="">ACO</div>: chatNumber===1 ? 
                        <span>EVA</span>
                        : chatNumber===2 ? <span>Magus</span> : chatNumber===3 ? <span>Waifu</span> : <span>Doctor</span> 

                    }
                    
                   
                    
                    
                    
                    </div>
                    
                </div>
                <ChatContent id={chatNumber}  />
            </div>
        </div>
    </div>
</div>
        <div id='bottom' className='italk'>Developed by Piyush</div>
    </div>

    )
}

export default Home;

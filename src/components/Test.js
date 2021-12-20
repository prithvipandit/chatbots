import React from 'react'
function Test() {
    const apiFetch =()=>{
        fetch("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=I'm good", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
                "x-rapidapi-key": "16f1b25764mshc9dd4c69693d925p11a565jsnee7e0c128a26"
            }
        })
        .then(response => {
            console.log(response);
            console.log(response.body);
        })
        .catch(err => {
            console.error(err);
        });
    };

    async function apiFetch1(){
        fetch("https://ai-chatbot.p.rapidapi.com/chat/free?message=What's%20your%20name%3F&uid=user1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ai-chatbot.p.rapidapi.com",
		"x-rapidapi-key": "16f1b25764mshc9dd4c69693d925p11a565jsnee7e0c128a26"
	}
})
.then(response => {
    return response.json();
}).then(response=>{
    console.log(response.chatbot.response);
})
.catch(err => {
	console.error(err);
});
    };

    return (
        <div>
            <button onClick={apiFetch}>Fetch Api</button>
            <button onClick={apiFetch1}>Fetch Api1</button>

        </div>
    )
}
export default Test

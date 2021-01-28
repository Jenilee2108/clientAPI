if(!localStorage.getItem("token")){
console.log("hello");
    fetch("http://new-copain.herokuapp.com")
    .then(response=> response.json())
    .then(data=>{
        console.log(data.token),
        localStorage.setItem("token", data.token);
    });
}

document.getElementById("submit").addEventListener("click", ()=>{
    let message = document.getElementById("msg").value;
        let email = document.getElementById("mail").value;
        let texte = `Merci de répondre à:${email}\n que vous pouvez joindre à: ${email}\n qui vous dit:${message}`;
        console.log(message);
        console.log(texte);
        
        let auth =`Bearer ${localStorage.getItem("token")}`;

        fetch("https://slack.com/api/chat.postMessage", {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": auth
            }),
            body: JSON.stringify({channel:"C01L23QCM29",text:texte})
       });
});
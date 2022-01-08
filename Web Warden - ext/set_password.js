chrome.storage.local.get(["password"], function(items){
    if(typeof items.password!='undefined')
        document.body.innerHTML="Sorry password can be set only once."
    else
        document.getElementById("save").addEventListener("click",()=>{
            if(document.getElementById("pass").value==document.getElementById("confirm").value){
            chrome.storage.local.set({ "password": document.getElementById("pass").value }, function(){});
            document.body.innerHTML="Password has been set succesfully!"
            }
            else{
                document.body.innerHTML="Passwords doesn't match!"
            }
        })
  });
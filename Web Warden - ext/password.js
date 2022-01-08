chrome.storage.local.get(["password"], function(items){
    if(typeof items.password=='undefined')
        document.body.innerHTML="Please set a password (Right click --> Options)"
    else
        document.getElementById("save").addEventListener("click",()=>{
            if(items.password==document.getElementById("pass").value){
                location.href="opt.html"
            }
            else{
                document.body.innerHTML="Wrong password"
            }

        })
  });
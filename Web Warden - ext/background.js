content=document.body.innerHTML;

chrome.storage.local.get("blacklist", (offensive_words)=>{
    console.log(offensive_words.blacklist)
    for(j in offensive_words.blacklist){

        console.log(offensive_words.blacklist[j])
        content=content.replaceAll(" "+offensive_words.blacklist[j], " Peace")
        content=content.replaceAll(offensive_words.blacklist[j]+" ","Peace ")
    }
    console.log(content)
    for(i in offensive_wds){
        content=content.replaceAll(offensive_wds[i]+" ","peace ")
        content=content.replaceAll(" "+offensive_wds[i]," peace")
    }
    
    
    // Replace images
    
    body = content
    var parser = new DOMParser();
    var doc = parser.parseFromString(body, "text/html")
    var imgs =doc.getElementsByTagName("img");
    images=[]
    for(i=0;i<imgs.length;i++){
    
        images.push(imgs[i].src)
    }
    data={"urls":images}
    
    
    // Checking state
    chrome.storage.local.get(["state"], function(items){
        if(items.state=="on"){
            chrome.storage.local.get(["image"], function(items){
                if(items.image=="on"){
                    FilterImage();
                }
              });
              chrome.storage.local.get(["text"], function(items){
                if(items.text=="on")
                    finish();
              });
        }
        else{
            document.getElementsByTagName("html")[0].style.display="block";
        }
      });
    
    
    
    // End of replace images
    function mainFunction(data){
        replaceable=[];
        for (key in data){
            keyIndex=key.lastIndexOf("/");
            urlKey=key.substring(keyIndex+1);
            urlKey=urlKey.replaceAll("_","/");
            urlKey=atob(urlKey);
            if(data[key].unsafe<=data[key].safe){ // >= gives wrong result , else proper one
                console.log(urlKey+" ==> Safe");
            }
            else{
                replaceable.push(urlKey);
                console.log(urlKey+" ==> Unsafe");
            }
        }
    
        if(replaceable.length>0){
            for(i=0;i<imgs.length;i++){
                console.log(imgs[i].src)
                if(replaceable.includes(imgs[i].src)){
                    console.log("replaced")
                    doc.getElementsByTagName("img")[i].src="https://picsum.photos/200?random="+(Math.random() + 1).toString(36).substring(7);
                }
            }
        }
    
        
        document.body.innerHTML=doc.body.innerHTML.toString()
        document.getElementsByTagName("html")[0].style.display="block";
    
    }
    
    
    
    function FilterImage(){
        fetch("https://8698-142-93-217-214.ngrok.io",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ mainFunction(data) })
    
    }
    //{"url":{"unsafe":0.9,"safe":0.2},}
    
    function finish(){
            //Place HTML after replacing text and HTML
            chrome.storage.local.get(["image"], function(items){
                if(items.image!="on"){
                    console.log(doc)
                    document.body.innerHTML=doc.body.innerHTML.toString()
                    document.getElementsByTagName("html")[0].style.display="block";
                }
              });
    
    }
})

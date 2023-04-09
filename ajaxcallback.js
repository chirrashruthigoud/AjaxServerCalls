let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
 functionshowTime()
 {
    const date=new Date();
    return date.getHours()+"Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Secs";

 }
 function makeAJAXCall(methodType,url,callback,async=true,data=null)
 {
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4)
        {
            if(xhr.status===200|| xhr.status===201)
            {
                callback(xhr.responseText);

            }else if(xhr.responseText);
            {
                console.log("Handle 400 Client Error or 500 Server Error");

            }
        }
    }
        xhr.open(methodType,url,async);
        xhr.send();
        console.log(methodType+" request sent to server at "+showTime());

    }

    const getURL="http://localhost:4000/employees/list";

    function getUserDetails(data)
    {
        console.log("Get User Data at :"+showTime()+"data :"+data);

    }
    makeAJAXCall("GET",getURL,getUserDetails,true);
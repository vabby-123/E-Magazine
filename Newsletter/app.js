const express=require("express");
const bodyParser= require("body-parser");
const request= require("request");
const https= require("https");




const app=express();


app.use(express.static("public")); // to access offline files in public folder

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res)
{
    res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req,res)
{  
    console.log(res.statusCode);
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    
    const data={

        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                },
            }
        ]
    };

    const jsonData= JSON.stringify(data);
    const url="https://us14.api.mailchimp.com/3.0/lists/b636716680";

    const options={
        method:"POST",
        auth:"vabby1:244257667c21d9993c8e889fd1e6f7a3-us14"
    }
    const request=https.request(url, options,function(response)
    {
      response.on("data", function(data){
        console.log(JSON.parse(data));
      })
    })
    
    request.write(jsonData);
    request.end;
})
app.listen(3000, function()
{
    console.log("Server is running");
})


// 0abe70f705736f83c0a31ae39d8bc24a-us14

//b636716680
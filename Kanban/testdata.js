
var base_task_set =[
  { id:1, status:"new", text:"Task 1", tags:"webix,docs", comments:[{text:"Comment 1"}, {text:"Comment 2"}] },
  { id:2, status:"work", text:"Task 2", color:"red", tags:"webix", votes:1, personId: 4  },
  { id:3, status:"work", text:"Task 3", tags:"webix,docs", comments:[{text:"Comment 1"}], personId: 6 },
  { id:4, status:"test", text:"Task 4 pending", tags:"webix 2.5", votes:1, personId: 5  },
  { id:5, status:"new", text:"Task 5", tags:"webix,docs", votes:3  },
  { id:6, status:"new", text:"Task 6", tags:"webix,kanban", comments:[{text:"Comment 1"}, {text:"Comment 2"}], personId: 2 },
  { id:7, status:"work", text:"Task 7", tags:"webix", votes:2, personId: 7, image: "image001.png"  },
  { id:8, status:"work", text:"Task 8", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}], votes:5, personId: 4  },
  { id:9, status:"work", text:"Task 9", tags:"webix", votes:1, personId: 2},
  { id:10, status:"work", text:"Task 10", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}, {text:"Comment 3"}], votes:10, personId:1 },
  { id:11, status:"work", text:"Task 11", tags:"webix 2.5", votes:3, personId: 8 },
  { id:12, status:"done", text:"Task 12", votes:2 , personId: 8, image: "image002.png"},
  { id:13, status:"ready", text:"Task 14",  personId: 8}
];

function tasks(){
  this.id=0
  this.status="string (Resource)";
  this.text="string";
}

//Query Tasks Table and Create Tasks Array ?a=td
 var url = "https://team.quickbase.com/db/bnbk56xz3?a=API_DoQuery&qid=62";     // Remember to put in YOUR baseURL
  //url    += "&query={'48'.EX.'6'}"; //Replace with {'YOUR RELATED PROJECT IDE'.EX."RELATED PROJECT}"

  var request = "<qdbapi>";
  request    += "<usertoken>b287yg_uyp_cxbp7xgd3h2ynzxi6sfscwmr6nk</usertoken>";            // Remember to put in YOUR appToken
  request    += "</qdbapi>";
  <!-- https://team.quickbase.com/db/bmfirusyr?a=API_DoQuery&query={'48'.EX.'6'}&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53 --> 
var taskArray=[]; 

$.ajax({
type: "POST",
contentType: "text/xml",
async: false,
url: url,
dataType: "xml",
processData: false,
data: request,
          success: function (response) {

           var xml = $(response); //Convert response to XML Code
           if (xml.find('qdbapi').find('errcode').text() == "0") {
        
         // console.log(response); 
      //Looping Through Response Begins Below
                       xml.find('qdbapi').find('record').each(function(index){  
                        var x = new tasks(0, "Task Name", "Status"); 
                        x.id=$(this).find("record_id_").text();
                        x.text=$(this).find("task_name").text();
                        x.status=$(this).find("activation_status").text();
                        taskArray.push(x);
                        //console.log(coachArray);
                        //console.log(x); 
                        
                      //console.log("\n\n");
                    });//End XML Loop
        //console.log(coachArray);
        }
          else 
          {
           console.log("Quickbase returned an error.");
           console.log(response);
         } 
       },
error: function (response)
  {
  console.log("Quickbase returned an error.");
  console.log(response);
  }
});
console.log(taskArray); 
console.log(base_task_set); 

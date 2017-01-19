function tasks(){
  this.taskID="string";
  this.taskName="string";
  this.taskStatus="string (Resource)";
  this.taskStartDate="StartDate";
  this.taskEndDate="EndDate";
  this.taskDuration=0;
  this.taskPercentComplete=0;
  this.taskPredID="Name";
  this.taskRelProject="string"; 
}

//Query Tasks Table and Create Tasks Array
 var url = "https://team.quickbase.com/db/bmfirusyr/?a=API_DoQuery";     // Remember to put in YOUR baseURL
  //url    += "&query={'48'.EX.'6'}"; //Replace with {'YOUR RELATED PROJECT IDE'.EX."RELATED PROJECT}"

  var request = "<qdbapi>";
  request    += "<usertoken>b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53</usertoken>";            // Remember to put in YOUR appToken
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
                        var x = new tasks(0,"Name","Status","StartDate","EndDate",0,0,0); 
                        x.taskID=$(this).find("task_id").text();
                        x.taskName=$(this).find("task_name").text();
                        x.taskStatus=$(this).find("status").text();
                        x.taskStartDate=new Date(parseInt($(this).find("start").text()));
                        x.taskEndDate=new Date(parseInt($(this).find("projected_finish").text()));
                        x.taskDuration=parseInt(($(this).find("duration").text()));; 
                        x.taskPercentComplete=parseInt(($(this).find("___complete").text()*100));
                        //alert(x.taskPercentComplete);
                        x.taskPredID=$(this).find("predecessors").text();; /*$(this).find("predecessors").text();*/
                        x.taskRelProject=$(this).find("related_project").text();
                        //console.log(x); 

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

//GET PROJECTS
function projects(){
  this.projRID="string";
  this.projName="string"; 
  this.projStart="string"; 
}
var url = "https://team.quickbase.com/db/bmfirusyp/?a=API_DoQuery";     // Remember to put in YOUR baseURL

  var request = "<qdbapi>";
  request    += "<usertoken>b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53</usertoken>";            // Remember to put in YOUR appToken
  request    += "</qdbapi>";
  <!-- https://team.quickbase.com/db/bmfirusyr?a=API_DoQuery&query={'48'.EX.'6'}&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53 --> 
var projArray=[]; 

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
                        var x = new projects("string","string"); 
                        x.projRID=$(this).find("record_id_").text();
                        x.projName=$(this).find("project_name").text();
                        x.projStart=$(this).find("est_start_date").text(); 
                        projArray.push(x);
                        //console.log(coachArray);
                        //console.log(x); 
                        
                     // console.log("\n\n");
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

//console.log(taskArray,projArray);
function datatree(){
  this.id="string";
  this.text="string";
  this.type="string"; 
  this.startdate="string";
  this.enddate="string"; 
  this.parent="string";
  this.progress=1; 

}
var dataArray = []; 
for(var i = 0; i<projArray.length; i++){
//	console.log(projArray[i].projRID, projArray[i].projName)
 dataArray.push([projArray[i].projRID,projArray[i].projName, "type:gantt.config.types.project"]); 
}
//console.log(dataArray); 

var projects_with_milestones = {
	"data": 

	[/*
		{"id":11, "text":"Project #1", type:gantt.config.types.project, "progress": 0.6, "open": true},

		{"id":taskArray[0]['taskID'], "text":taskArray[0]['taskName'], "start_date":taskArray[0]['taskStartDate'], "end_date":taskArray[0]['taskEndDate'], "parent":"11", "progress": .8, "open": true},
		{"id":13, "text":"Task #2", "start_date":"03-04-2013", type:gantt.config.types.project, "parent":"11", "progress": 0.5, "open": true},
		{"id":14, "text":"Task #3", "start_date":"02-04-2013", "duration":"6", "parent":"11", "progress": 0.8, "open": true},
		{"id":15, "text":"Task #4", type:gantt.config.types.project, "parent":"11", "progress": 0.2, "open": true},
		{"id":16, "text":"Final milestone", "start_date":"15-04-2013", type:gantt.config.types.milestone, "parent":"11", "progress": 0, "open": true},

		{"id":17, "text":"Task #2.1", "start_date":"03-04-2013", "duration":"2", "parent":"13", "progress": 1, "open": true},
		{"id":18, "text":"Task #2.2", "start_date":"06-04-2013", "duration":"3", "parent":"13", "progress": 0.8, "open": true},
		{"id":19, "text":"Task #2.3", "start_date":"10-04-2013", "duration":"4", "parent":"13", "progress": 0.2, "open": true},
		{"id":20, "text":"Task #2.4", "start_date":"10-04-2013", "duration":"4", "parent":"13", "progress": 0, "open": true},
		{"id":21, "text":"Task #4.1", "start_date":"03-04-2013", "duration":"4", "parent":"15", "progress": 0.5, "open": true},
		{"id":22, "text":"Task #4.2", "start_date":"03-04-2013", "duration":"4", "parent":"15", "progress": 0.1, "open": true},
		{"id":23, "text":"Mediate milestone", "start_date":"14-04-2013", type:gantt.config.types.milestone, "parent":"15", "progress": 0, "open": true}
		*/
	],
	
	"links":[ /*
		{"id":"10","source":"11","target":"12","type":"1"},
		{"id":"11","source":"11","target":"13","type":"1"},
		{"id":"12","source":"11","target":"14","type":"1"},
		{"id":"13","source":"11","target":"15","type":"1"},
		{"id":"14","source":"23","target":"16","type":"0"},
		{"id":"15","source":"13","target":"17","type":"1"},
		{"id":"16","source":"17","target":"18","type":"0"},
		{"id":"17","source":"18","target":"19","type":"0"},
		{"id":"18","source":"19","target":"20","type":"0"},
		{"id":"19","source":"15","target":"21","type":"2"},
		{"id":"20","source":"15","target":"22","type":"2"},
		{"id":"21","source":"15","target":"23","type":"0"}
		*/
	] 
};              


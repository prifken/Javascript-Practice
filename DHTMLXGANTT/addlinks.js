/*
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
*/
function addlinks(){
		var url = "https://team.quickbase.com/db/bmfirusyr/?a=API_DoQuery";     // Remember to put in YOUR baseURL
		
		  var request = "<qdbapi>";
		  request    += "<usertoken>b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53</usertoken>";            // Remember to put in YOUR appToken
		  request    += "</qdbapi>";
		//console.log("Entered task array function, RID= "+RID); 
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
		                        x.taskDuration=parseInt(($(this).find("duration").text())); 
		                        x.taskPercentComplete=parseInt(($(this).find("___complete").text()*100));
		                        x.taskPredID=$(this).find("predecessors").text();; /*$(this).find("predecessors").text();*/
		                        x.taskRelProject=$(this).find("related_project").text();

								if(x.taskPredID){
									console.log("add link"); 
									console.log(x.taskID,x.taskPredID); 
									gantt.addLink({
									id:x.taskID+"_link",
									source: x.taskPredID,
									target: x.taskID, 
									type:0
									});
								}
								else{
									console.log("empty"); 
								}
								
								//console.log(RID+"_"+x.taskID);
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
		
		}
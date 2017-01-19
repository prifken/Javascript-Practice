function gettaskarray(RID){
		var url = "https://team.quickbase.com/db/bmfirusyr/?a=API_DoQuery&query={'48'.EX.'"+RID+"'}";     // Remember to put in YOUR baseURL
		
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
		                        //alert(x.taskPercentComplete);
		                        x.taskPredID=$(this).find("predecessors").text();; /*$(this).find("predecessors").text();*/
		                        x.taskRelProject=$(this).find("related_project").text();
		                        //console.log(x); 
		
		                      //console.log(x); 
		                        gantt.addTask({
		   						 id:RID+"_"+x.taskID,
		   						 text:x.taskName,
		   						 start_date:x.taskStartDate, 
		   						 duration: x.taskDuration
								}, RID, 1);
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
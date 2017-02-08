function updateTaskDependencies(source,target){
	    console.log("enter task dep function: ",source,target); 
		var url = "https://team.quickbase.com/db/bmfirusyr/?a=API_DoQuery&query={'3'.EX.'"+target+"'}";     // Remember to put in YOUR baseURL
		console.log(url)
		  var request = "<qdbapi>";
		  request    += "<usertoken>b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53</usertoken>";            // Remember to put in YOUR appToken
		  request    += "</qdbapi>";
		//console.log("Entered task array function, RID= "+RID); 
		$.ajax({
		type: "POST",
		contentType: "text/xml",
		async: true,
		url: url,
		dataType: "xml",
		processData: false,
		data: request,
		          success: function (response) {	

					console.log(response); 
		           var xml = $(response); //Convert response to XML Code
		           if (xml.find('qdbapi').find('errcode').text() == "0") {

		                       xml.find('qdbapi').find('record').each(function(index){  
		                       	var predecessors = $(this).find("predecessors").text(); 
		                        console.log("Predecessors: ",predecessors); 
		                        if(!predecessors){
		                        	predecessors=source;
		                        }
		                        else{
		                        	var split = predecessors.split(",");
		                        	console.log("Not empty, #items = ",split.length, split); 
		                        	for(i=0; i<split.length; i++){
		                        	if(i==(split.length-1)){
		                        		console.log("i== split.length-1, or last item"); 
		                        		if(split.length==1){
		                        			predecessors += ", "+source; 
		                        		}
		                        		else{
		                        			predecessors += source; 
		                        		}
		                        	}
		                        	else{
		                        		console.log("business as usual"); 
		                        	predecessors += ", "+split[i]; 
		                        	}
		                        }
		                        }
		                         
		                        

		                       /*
		                        if(split.length==0){
		                        	console.log("TRUE, =0!"); 
		                        	predecessors=source; 

		                        }
		                        else{
		                        	console.log("NOT = 0!"); 
		                        	
		                        } */
		                        
		                        
		                        console.log("Predecessors before edit call: ",predecessors); 
		                            
		                        	var url2 = "https://team.quickbase.com/db/bmfirusyr?a=API_EditRecord&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53";   
									url2    += "&rid="+target;
									url2    += "&_fid_75="+predecessors; 
								
									//alert(url2);
									
									$.ajax({
  								        type: "POST",
  								        contentType: "text/xml",
  								        async: true,
  								        url: url2,
  								        dataType: "xml",
  								        processData: false,
  								        success: function (response) {
  								            var xml = $(response);
  								            console.log(response); 
  								            if (xml.find('qdbapi').find('errcode').text() === "0") {
  								                rid = xml.find('qdbapi').find('rid').text();
  								            }
  								            else {
  								                console.log("Quickbase returned an error.");
  								                console.log(response);
  								            } 
  								        },
  								        error: function (e) {
  								             console.log(e);  
  								        }
  								    }); 
  								});
  							} //working

						} //end success function
	}); //endajax
	gantt.refreshData(); 	
}
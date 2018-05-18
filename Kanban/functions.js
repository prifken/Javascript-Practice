function updatetask(id,text,status){
console.log("id= ",id," text= ",text," status= ",status); 
	
			var url = "https://team.quickbase.com/db/bk7sy9jpi?a=API_EditRecord&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53"
      url+= "&rid="+id; 
			url+= "&_fid_173="+text; //History, Notes, and Issues = FID 55
			url+= "&_fid_12="+status; //Activtion Status = FID 12, replace with NEW Status

//https://team.quickbase.com/db/bnbk56xz3?a=td
	
	var rid = 0; 
		$.ajax({
          type: "POST",
          contentType: "text/xml",
          async: false,
          url: url,
          dataType: "xml",
          processData: false,
          success: function (response) {
          //alert("Boom.... success baby");
              var xml = $(response);
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
	return rid;   
}

function updatetaskowner(studentid,taskid){
console.log("studentid= ",studentid," taskid= ",taskid); 

      var url = "https://team.quickbase.com/db/bk7sy9jpi?a=API_EditRecord&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53"
      url+= "&rid="+taskid; 
      url+= "&_fid_141="+studentid; //FID 141 = Related Team Member on Tasks Table

//https://team.quickbase.com/db/bnbk56xz3?a=td
  
  var rid = 0; 
    $.ajax({
          type: "POST",
          contentType: "text/xml",
          async: false,
          url: url,
          dataType: "xml",
          processData: false,
          success: function (response) {
          //alert("Boom.... success baby");
              var xml = $(response);
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
  return rid;   
  
}

function addnewtask(text,personId,status){
console.log("text= ",text," personId= ",personId," status= ",status); 

      var url = "https://team.quickbase.com/db/bk7sy9jpi?a=API_AddRecord&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53"
      url+= "&_fid_141="+personId; //Related Team Member = FID 141
      url+= "&_fid_6="+text; //Task Name = FID 6
      url+= "&_fid_159=37" // Set related build season task to 0 - Misc
      url+= "&_fid_12="+status; //Activtion Status = FID 12, replace with NEW Status

  
  var rid = 0; 
    $.ajax({
          type: "POST",
          contentType: "text/xml",
          async: false,
          url: url,
          dataType: "xml",
          processData: false,
          success: function (response) {
          //alert("Boom.... success baby");
              var xml = $(response);
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
    console.log("rid = "+rid);
  return rid;   
 
}
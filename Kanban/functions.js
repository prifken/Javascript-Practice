function updatetask(id,text,status){
console.log("id= ",id," text= ",text," status= ",status); 
	
			var url = "https://team.quickbase.com/db/bnbk56xz3?a=API_EditRecord&usertoken=b287yg_uyp_cxbp7xgd3h2ynzxi6sfscwmr6nk"
      url+= "&rid="+id; 
			url+= "&_fid_55="+text; //History, Notes, and Issues = FID 55
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
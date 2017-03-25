


function runscript(TestFID, projectID, receiveID){
var url = "https://team.quickbase.com";     // Remember to put in YOUR baseURL
  url    += "/db/";
  url    += "bmjvxe629";                                   // Remember to put in YOUR tableDBID
  url    += "?a=API_DoQuery&query={'7'.EX.'"+projectID+"'}";
  //alert(url); 

  var request = "<qdbapi>";
  request    += "<usertoken>b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53</usertoken>";            // Remember to put in YOUR appToken
  request    += "</qdbapi>";

var planned_orders_placed = 0; 
var planned_received_orders = 0; 
var actual_orders_placed = 0; 
var actual_orders_received = 0; 
$.ajax({
type: "POST",
contentType: "text/xml",
async: false,
url: url,
dataType: "xml",
processData: false,
data: request,
          success: function (response) {
           alert("success!"); 
           var xml = $(response); //Convert response to XML Code
             if (xml.find('qdbapi').find('errcode').text() == "0") {
      //Looping Through Response Begins Below
                       xml.find('qdbapi').find('record').each(function(index){  
                         var x = new Date(parseInt($(this).find("date").text()));
                         var RID = $(this).find("record_id_").text();
                         //planned_orders_received
                        //alert("1:"+$(this).find("planned_orders_placed").text());
                        //alert("2:"+$(this).find("planned_orders_received").text()); 
                        var plannedordered = parseInt($(this).find("planned_orders_placed").text()); 
                        var plannedreceived = parseInt($(this).find("planned_orders_received").text()); 
                        var actualordered = parseInt($(this).find("total_amount_ordered").text());
                        var received = parseInt($(this).find("total_amount_received").text());
                        if(!plannedordered){
                          editrecord(planned_orders_placed.toString(), RID,TestFID, receiveID); 
                          console.log("falsey");
                        }
                        else{
                          planned_orders_placed+= plannedordered;
                          console.log("To String before Edit: "+planned_orders_placed); 
                          editrecord(planned_orders_placed.toString(), RID, TestFID, receiveID
                            ); 
                          console.log("not falsey"); 
                        }
                        
                        if(!plannedreceived){
                          editrecord(planned_received_orders.toString(), RID, receiveID, receiveID);
                        }
                        else{
                          //alert("alert: "+plannedreceived);
                          planned_received_orders += plannedreceived;
                          editrecord(planned_received_orders.toString(), RID, receiveID, receiveID); 
                        }

                        if(!actualordered){
                          editrecord(actual_orders_placed.toString(), RID, "34", receiveID);
                        }
                        else{
                          //alert("alert: "+plannedreceived);
                          actual_orders_placed += actualordered;
                          editrecord(actual_orders_placed.toString(), RID, "34", receiveID); 
                        }
                        if(!received){
                          editrecord(actual_orders_received.toString(), RID, "35", receiveID);
                        }
                        else{
                          //alert("alert: "+plannedreceived);
                          actual_orders_received += received;
                          editrecord(actual_orders_received.toString(), RID, "35", receiveID); 
                        }

                        
                      console.log("\n\n");
                    });//End XML Loop
        //console.log(coachArray);
        }
          else 
          {
          alert("Quickbase returned an error.");
           //console.log(response);
         } 
       },
error: function (response)
  {
  alert("Quickbase returned an error #2");
  alert(response);
  }
});
}

function editrecord(plannedorders,rid,testID, receiveID){

var url2 = "https://team.quickbase.com/db/bmjvxe629?a=API_EditRecord&usertoken=b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53";   
url2    += "&rid="+rid;
url2    += "&_fid_"+testID+"="+plannedorders; 
//url2    += "&_fid_"+receiveID+"="+"23";
//alert(url2);
$.ajax({
          type: "POST",
          contentType: "text/xml",
          async: false,
          url: url2,
          dataType: "xml",
          processData: false,
          success: function (response) {
          //alert("Boom.... success baby");
              var xml = $(response);
              if (xml.find('qdbapi').find('errcode').text() === "0") {
                  rid = xml.find('qdbapi').find('rid').text();
                  console.log("RID= "+rid);
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
}

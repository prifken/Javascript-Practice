<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEiUp-oqXopKXCD0SSOWhF967fS1khhfE&callback=initMap">
    </script>

<script>
function pairs(){
  this.addressA="Name";
  this.addressB="Name";
  this.rid=0;
  this.dist=0;
}

var url = "https://team.quickbase.com";     // Remember to put in YOUR baseURL
  url    += "/db/";
  url    += "bmfdm4hh4";                                   // Remember to put in YOUR tableDBID
  url    += "?a=API_DoQuery";

  var request = "<qdbapi>";
  request    += "<usertoken>b287yg_uyp_r4sh5ybgb8hpsdaq5k5rcmutwp9</usertoken>";            // Remember to put in YOUR appToken
  request    += "</qdbapi>";

var addressarray=[]; 

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
        
          var cast = 0; 
      //Looping Through Response Begins Below
                       xml.find('qdbapi').find('record').each(function(index){  
                        var x = new pairs("Test","Test",0, "Test"); 
                        x.addressA=$(this).find("location_a").text();
                        x.addressB=$(this).find("location_b").text();
                        x.rid=$(this).find("record_id_").text();
                       // x.dist=$(this).find("record_id_").text();
                       //alert(x.addressA, x.addressB, x.recordID)
                        addressarray.push(x);
                        //console.log(coachArray);
                      console.log("\n\n");
                    });//End XML Loop
        //console.log(coachArray);
        }
          else 
          {
           console.log("Quickbase returned an error.");
           //console.log(response);
         } 
       },
error: function (response)
  {
  console.log("Quickbase returned an error.");
  console.log(response);
  }
});
var addressA=[];
var addressB=[];
var globals=0; 
for (var i=0; i<addressarray.length; i++){
  console.log(i, addressarray[i].addressA, addressarray[i].addressB)
  addressA.push(addressarray[i].addressA);
  addressB.push(addressarray[i].addressB);
}
console.log(addressarray[2].addressA, addressarray[2].addressB)
var a = "";
var b = ""; 
  for (var i=0; i<addressarray.length; i++)
    {
      
      //console.log(i, eval(a), eval(b), addressarray.length); 
      if(i==(addressarray.length-1))
        {
          console.log("at length"); 
      a += addressarray[i]['addressA']; //no comma and spaces for last element
      b += addressarray[i]['addressB'];
        } 
      else
        {
          console.log("not at length")
      a += addressarray[i]['addressA']+", "; 
      b += addressarray[i]['addressB']+", ";
      //alert(addressarray[i]['addressA'],addressarray[i]['addressB']);
        }
        console.log(i, "a="+a, "b="+b);
    }
console.log("origins: ["+a+"]","destinations: ["+b+"]"); 
//alert("origins: ["+a+"]");
//alert("origins: ["+b+"]");
//console.log(addressA, addressB)
//console.log(addressA,addressB);

</script>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Directions service</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
    </style>
  </head>
  <body>
    <div id="floating-panel">
    </div>
    <div id="map"></div>
    <script>
     var responsearray = []; 
     //var globals = 0; 
      function initMap() 
        {
       
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), 
              {
                zoom: 7,
               center: {lat: 41.85, lng: -87.65}
              });
        directionsDisplay.setMap(map);
        var distanceService = new google.maps.DistanceMatrixService();
        
          distanceService.getDistanceMatrix(
                    {
                  origins: addressA, //addressA is an string of starting points
                  destinations: addressB, //addressB is an string of end points */
                  
                  //origins: [addressA[0], addressA[1], addressA[2]], //addressA is an string of starting points
                  //destinations: [addressB[0], addressB[1], addressB[2]], //addressB is an string of end points
                  
                  travelMode: google.maps.TravelMode.DRIVING,
                  unitSystem: google.maps.UnitSystem.METRIC,
                  durationInTraffic: true,
                  avoidHighways: false,
                  avoidTolls: false
                    },
                function callback (response, status) 
                    {
                      
                      
                      if (status !== google.maps.DistanceMatrixStatus.OK) 
                          {
                          console.log('Error:', status);
                          } else 
                            {
                              //console.log(response.rows);
                              //console.log(response); 
                              
                              addnumber(response);
                            }
                     
                    });
        
          
          //console.log(globals); 

        };
         

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);

          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
    </script>
    


<script>
function addnumber(response){
  //for (var i=0; i<addressarray.length; i++){
 console.log(response); 
 for(var i=0; i<addressarray.length; i++){
  //console.log(addressarray[i]);
  //console.log("Origins[i]: "+response.originAddresses[i]);
  //console.log("Destination[i]: "+response.destinationAddresses[i]);
  //console.log("Distance[i]: "+response.rows[i].elements[i].distance.value +" km \n\n");
  //console.log("at this point: "+addressarray); 
  
  addressarray[i]['dist']=response.rows[i].elements[i].distance.value; 
  }
  //console.log(addressarray); 
  editrecord(); 
    //editrecord(); 
  //}
}
</script>

  </body>
</html>

<script>
function editrecord(){
for (var i = 0; i<addressarray.length; i++){
var url2 = "https://team.quickbase.com/db/bmfdm4hh4?a=API_EditRecord&usertoken=b287yg_uyp_r4sh5ybgb8hpsdaq5k5rcmutwp9";   
url2    += "&rid="+addressarray[i].rid;
url2    += "&_fid_20="+addressarray[i].dist; 
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
}
</script>
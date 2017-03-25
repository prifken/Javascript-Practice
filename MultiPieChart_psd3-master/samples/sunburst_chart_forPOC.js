 $.getScript("https://code.jquery.com/jquery-2.1.4.min.js", function(data, textStatus, jqxhr) {
 $.getScript("https://team.quickbase.com/db/bmna2pj5n?a=pagePreview&pageID=3", function(data, textStatus, jqxhr) {
 	//alert("QB Page"); 
 $.getScript("https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js", function(data, textStatus, jqxhr) {
 	//alert("Cloudflare"); 
 $.getScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js", function(data, textStatus, jqxhr) {
 	//alert("bootstrap"); 
 
var sampleData = [{
            noOfColleges: 5,
            place: "15 Days",
	         drilldown: [{
                    noOfColleges: 2400,
                    place: "$-1,280"
                }]
            }, 
            {
            noOfColleges: 5,
            place: "30 Days",
             drilldown: [{
                    noOfColleges: 1800,
                    place: "$329"
                }]
            }, 
            {
            noOfColleges: 5,
            place: "60 Days",
		    drilldown: [{
                    noOfColleges: 2400,
                    place: "$3,549"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "90 Days",
              drilldown: [{
                    noOfColleges: 2400,
                    place: "$6,768"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "120 Days",
              drilldown: [{
                    noOfColleges: 1000,
                    place: "$9,988"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "180 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$16,427"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "210 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$19,647"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "240 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$22,866"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "270 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$20,086"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "300 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$29,305"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "330 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$32,525"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "360 Days",
            drilldown: [{
                    noOfColleges: 1000,
                    place: "$35,744"
                }]
           	},
           	{
            noOfColleges: 5,
            place: "Continued Engagement",
           	},
           	];

        var config = {
            containerId: "chartContainer",
            width: 650,
            height: 650,
            data: sampleData,
            heading: {
                text: "Revenue after Days of Engagement",
                pos: "top"
            },
            label: function(d) {
                return d.data.place;
            },
            value: "noOfColleges",
            inner: "drilldown",
            tooltip: function(d) {
                return "<p>A number of visualization options can be leveraged in Quickbase, this is one example</p>";
            },
            transition: "bounce",
            transitionDuration: 250,
            donutRadius: 25,
            rotateLabel: true
        };

        var samplePie = new psd3.Pie(config);
});
}); 
}); 
});

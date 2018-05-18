


var task_set = [
	{ id:1, status:"new", text:"Task 1", tags:"webix,docs" },
	{ id:2, status:"new", text:"Task 2", tags:"webix" },
	{ id:3, status:"new", text:"Task 3", tags:"webix" },
	{ id:4, status:"new", text:"Task 4", tags:"webix" },
	{ id:5, status:"new", text:"Task 5", tags:"webix,docs" },

	{ id:6, status:"ready", text:"Task 6", tags:"webix,docs" },
	{ id:7, status:"ready", text:"Task 7", tags:"webix" },
	{ id:8, status:"ready", text:"Task 8", tags:"webix" },
	{ id:9, status:"ready", text:"Task 9", tags:"webix" },
	{ id:10, status:"ready", text:"Task 10", tags:"webix,docs" },

	{ id:11, color:"red", status:"work", text:"Task 11", tags:"webix,docs" },
	{ id:12, status:"work", text:"Task 12", tags:"webix" },
	{ id:13, status:"work", text:"Task 13", tags:"webix" },
	{ id:14, color:"red", status:"work", text:"Task 14", tags:"webix" },
	{ id:15, status:"work", text:"Task 15", tags:"webix,docs" },

	{ id:16, status:"test", text:"Task 16", tags:"webix,docs" },
	{ id:17, color:"red", status:"work", text:"Task 17", tags:"webix" },

	{ id:18, status:"done", text:"Task 18", tags:"webix,docs" },
	{ id:19, color:"red", status:"done", text:"Task 19", tags:"webix" },

	{ id:20, status:"complete", text:"Task 20", tags:"webix,docs" },
	{ id:21, color:"red", status:"complete", text:"Task 21", tags:"webix" },


	{ id:22, status:"ready", text:"Task 22", tags:"webix,docs" },
	{ id:23, color:"red", status:"ready", text:"Task 23", tags:"webix" }
];


var user_task_set =[
	{ id:1, status:"new", text:"Test new authentification service", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}] },
	{ id:2, status:"work", user: 1, text:"Performance tests", color:"red", tags:"webix"  },
	{ id:3, status:"work", user: 2, text:"Kanban tutorial", tags:"webix,docs", comments:[{text:"Comment 1"}] },
	{ id:4, status:"work", user: 3, text:"SpreadSheet NodeJS", tags:"webix 3.0"  },
	{ id:5, status:"test", user: 3, text:"Portlets view", tags:"webix 2.5"  }
];
var team_task_set =[
	{ id:1, status:"new", text:"Test new authentification service", tags:"webix", comments:[{text:"Comment 1"}, {text:"Comment 2"}] },
	{ id:2, status:"work", team: 1, text:"Kanban tutorial", color:"red", tags:"webix,docs"  },
	{ id:3, status:"work", team: 2, text:"New skin", tags:"webix"},
	{ id:4, status:"work", team: 1, text:"SpreadSheet NodeJS", tags:"webix 3.0"  },
	{ id:5, status:"test", text:"Portlets view", tags:"webix 2.5"  }
];
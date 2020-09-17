 var wordsDict ="";
d3.json('data/wordsDict.json',function(data){
	wordsDict = data;
})
function createCloud(paraName){
	
	
		var screenHeight = $(window).height()
		var screenWidth = $(window).width()
		
		var thisWords = wordsDict[paraName];
		
		if(thisWords == undefined){
			
			return false;
		}
		var wordCount = 0;   
		  try{
		  	    
		  		thisWords = thisWords.filter(function(d){
		  			return d[1]>=0.1;
		    })
		  }catch(err){
		  	console.log(err.message);
		  }


    		
        var scaleW = d3.scale.linear()
                      .domain([0,1920])
                      .range([0,450]);
        
        var scaleH = d3.scale.linear()
                      .domain([0,1000])
                      .range([0,600]);
                      
        var scaleFont = 1920/screenWidth;
        
		var fill = ["#E74C3C","#ECF0F1"];
		
		var layout = d3.layout.cloud()
    		.size([scaleW(screenWidth), scaleH(screenHeight)])
    		.words(thisWords.map(function(d) {
    		 return {text: d[0], size: 10 + d[1] * 60/scaleFont, test: "haha"};
    	   }))
    		.padding(5)
    		.rotate(function() { return ~~(Math.random() * 2) * 90; })
    		.font("Impact")
    		.fontSize(function(d) { return d.size; })
    		.on("end", draw);

	layout.start();

	function draw(words) {
		
		d3.selectAll(".right-word-cloud").selectAll('*').remove()
		
  		d3.selectAll(".right-word-cloud").append("svg")
      		.attr("width", layout.size()[0])
      		.attr("height", layout.size()[1])
    		.append("g")
      		.attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    		.selectAll("text")
      		.data(words)
		    .enter().append("text")
		    .style("font-size", function(d) { return d.size + "px"; })
		      .style("font-family", "Impact")
		      .style("fill", function(d, i) { return fill[i%fill.length]; })
		      .attr("text-anchor", "middle")
		      .attr("transform", function(d) {
		        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		      })
		      .text(function(d) { return d.text; });
		}

	
	
}

var map = new BMap.Map('allmap'); // 创建地图实例
var point = new BMap.Point(116.404, 39.915); // 创建点坐标
map.centerAndZoom(point, 10); // 初始化地图， 设置中心点坐标和地图级别
map.disableScrollWheelZoom(true); //禁止滚轮放大缩小
map.disableDragging(); //禁止拖拽
map.disableDoubleClickZoom(); //禁止双击放大

$("#closeBMap").click(function(){closeWindow()});

function closeWindow(){
	$("#BMap_back").css("display", "none");
	$('#companyIntroduce').css("display", "none");
	$('#companyPerson').css("display", "none");
	$('#companyPaper').css("display", "none");
	$('#companyPatent').css("display", "none");
	$('#companyPerson').css("transform", "rotateY(0deg)")
	$('#companyPatent').css("transform", "rotateY(-90deg)")
	document.getElementById('companyIntroduce').innerHTML = "";
	document.getElementById('companyPerson').innerHTML = "";
	document.getElementById('companyPaper').innerHTML = "";
	document.getElementById('companyPatent').innerHTML = "";
}
map.setMapStyle({
	style: "midnight"
});

function appendMaker() {
	$.getJSON("data/findByCity.json", (data) => {
		var addressData = data.data.enterpList; //标注信息
		addressData.forEach((item, i) => {
			var point = new BMap.Point(addressData[i].enterpLng, addressData[i].enterpLat);
			var marker = new BMap.Marker(point);
			map.addOverlay(marker);
			var content = "<div class='messageOverWindow'><p>" + addressData[i].enterpFullname + "</p>" + "<hr /><p>行业领域:" + addressData[i].enterpDomainName + "</p><p>联系人:" + addressData[i].enterpContact + "</p><p>联系电话:" + addressData[i].enterpPhone + "</p>";
			if(addressData[i].enterpContactMail) {
				content += "<p>电子邮件:" + addressData[i].enterpContactMail + "</p></div>";
			} else {
				content += "</div>";
			}
			addClickHandler(content, marker, item); //增加事件的信息窗口
		})
	});
}

function addClickHandler(content, marker, item) {
	marker.addEventListener("click", function(e) {
		$.getJSON("data/findByCity.json", (data) => {
			var company = data.data.enterpList;
			createInformationWindow(company, item);
		})
		$('#companyIntroduce').css("display", "block");
		$('#companyPerson').css("display", "block");
		$('#companyPaper').css("display", "block");
		$('#companyPatent').css("display", "block");
		$("#allmap").css("display", "none")
	}, "false");
	marker.addEventListener("mouseover", () => {
		var label = new BMap.Label(content, {
			offset: new BMap.Size(20, 30)
		});
		marker.setLabel(label);
	}, "false");
	marker.addEventListener("mouseout", () => {
		map.removeOverlay(marker.getLabel())
	}, "false");
}
document.getElementById('BMap_back').addEventListener("click",function(e){
	if(e.target.id=="BMap_back"){
		closeWindow()
	}
})


function createInformationWindow(company, item) {
	for(var i = 0; i < company.length; i++) {
		if(item.enterpFullname == company[i].enterpFullname) {
			var companyName = document.createElement('h1');
			companyName.innerHTML = company[i].enterpFullname;
			companyName.style.color = "red";
			$('#companyIntroduce').append(companyName);
			var companyEnglishName = document.createElement('h2');
			companyEnglishName.innerHTML = company[i].EnglishName;
			companyEnglishName.style.color = "darkred";
			$("#companyIntroduce").append(companyEnglishName);
			var market = document.createElement('span');
			market.innerHTML = "上市市场：" + company[i].market;
			$("#companyIntroduce").append(market);
			var buildDate = document.createElement('span');
			buildDate = "成立日期：" + company[i].buildDate;
			$('#companyIntroduce').append(buildDate);
			var price = document.createElement('span');
			price.innerHTML = "注册资本：" + company[i].registeredCapital;
			$('#companyIntroduce').append(price);
			var outDate = document.createElement('span');
			outDate.innerHTML = "上市日期：" + company[i].outDate;
			$('#companyIntroduce').append(outDate);
			var webSite = "公司网址：<a href=\"" + company[i].companyWebSite + "\" target=\"_blank\">" + company[i].companyWebSite + "</a>";
			$('#companyIntroduce').append(webSite);
			var phone = "<span>公司电话：" + company[i].companyPhoneNumber + "</span>";
			$('#companyIntroduce').append(phone);
			var email = "<span>公司电子邮箱：" + company[i].companyEmail + "</span>";
			$('#companyIntroduce').append(email);
			var postalcode = "<span>邮政编码：" + company[i].postalcode + "</span>";
			$('#companyIntroduce').append(postalcode);
			var address = "<span>公司地址：" + company[i].companyAddress + "</span>";
			$('#companyIntroduce').append(address);
			var summary = "<span>公司简介：" + company[i].companySummary + "</span>";
			$('#companyIntroduce').append(summary);
			var bulletin = "<div id=\"companyBulletin\"><h3>公司公告</h3></div>";
			$('#companyPerson').append(bulletin);
			var notice = "<ul>";
			for(var j = 0; j < company[i].bulletin.length && j < 4; j++) {
				notice += "<li><a target=\"_blank\" href=\"" + company[i].bulletin[j].link + "\">" + company[i].bulletin[j].title + "</a>";
			}
			notice += "</ul>";
			$('#companyBulletin').append(notice);
			var person = "<div id=\"companyManagement\"><h3>公司管理人员</h3></div>";
			$('#companyPerson').append(person);
			var person = "<ul>";
			for(var j = 0; j < company[i].management.length && j < 2; j++) {
				person += "<li><span>" + company[i].management[j].summary + "</span>";
			}
			person += "</ul>";
			$('#companyManagement').append(person);
			var arrowRight = "<span id=\"arrowRight\"></span>";
			$('#companyPerson').append(arrowRight);
			var paper = "<h3>公司人员发表文章</h3><ul>";
			for(var j = 0; j < company[i].paper.length && j < 4; j++) {
				paper += "<li><span>期刊：" + company[i].paper[j].periodical + "</span>";
				paper += "<span>标题：" + company[i].paper[j].title + "</span>";
				paper += "<span>关键词：" + company[i].paper[j].keyword + "</span>";
				paper += "<span>作者：" + company[i].paper[j].writter + "</span>";
			}
			paper+="</ul>";
			$('#companyPaper').append(paper);
			var patent="<h3>公司专利</h3><ul>";
			for(var j=0;j<company[i].patent.length&&j<4;j++){
				patent+="<li><span>专利名："+company[i].patent[j].title+"</span><span>专利描述："+company[i].patent[j].abso+"</span>";
			}
			$('#companyPatent').append(patent);
			var arrowLeft="<span id=\"arrowLeft\"</span>";
			$('#companyPatent').append(arrowLeft);
			$('#arrowRight').click(function() {
				var timer = setInterval(function() {
					$('#companyPatent').css("transform", "rotateY(0deg)");
					clearInterval(timer);
				}, 1500);
				$('#companyPerson').css("transform", "rotateY(-90deg)");
			})
			$('#arrowLeft').click(function(){
				$('#companyPatent').css("transform","rotateY(-90deg)");
				var timer=setInterval(function(){
					$('#companyPerson').css("transform","rotate(0deg)");
					clearInterval(timer)
				},1500)
			})
		}
	}
}

function getBoundary(site) {
	var bdary = new BMap.Boundary();
	bdary.get(site, function(rs) { //获取行政区域
		map.clearOverlays(); //清除地图覆盖物       
		appendMaker(); // 向地图添加需要的标注
		var count = rs.boundaries.length; //行政区域的点有多少个
		if(count === 0) {
			alert('未能获取当前输入行政区域');
			return;
		}
		var pointArray = [];
		for(var i = 0; i < count; i++) {
			var ply = new BMap.Polygon(rs.boundaries[i], {
				strokeWeight: 2,
				strokeColor: "#ff0000"
			}); //建立多边形覆盖物
			map.addOverlay(ply); //添加覆盖物
			pointArray = pointArray.concat(ply.getPath());
		}
		ply.setFillColor("rgb(48,96,129)") //区域内的颜色
		map.setViewport(pointArray); //调整视野           
	});
}
var dataDisplay_name = ["专利", "论文", "成果", "总数量"];
var dataDisplay_Number = ["1689837", "14146789", "3480811", "711968448"];
var dataDisplay_id = ["dataDisplay_todayUserNumber", "dataDisplay_totalUserNumber", "dataDisplay_payNumber", "dataDisplay_totalPayNumber"]

function getData(t, id) {
	var arr = [];
	arr = t.split(',');
	var target = "";
	for(var i = 0; i < arr.length; i++) {
		target += arr[i];
	}
	t = parseFloat(target);
	upData(t, id);
}

function upData(target, id) {
	var num = 0;
	var a = 0;
	var time = setInterval(function() {
		num = parseFloat(num);
		if(a < 1) {
			a += 0.1;
			num = Math.floor(target * a);
			document.getElementById(id).innerHTML = num;
		} else {
			clearInterval(time);
			num = target;
			num = Transform(num);
			document.getElementById(id).innerHTML = num;
		}
	}, 100)
}

function Transform(num) {
	var source = String(num); //按小数点分成2部分
	source = source.replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,"); //只将整数部分进行都好分割
	return source; //再将小数部分合并进来
}

function increaseData() {
	for(var i = 0; i < dataDisplay_id.length; i++) {
		var id = document.getElementById(dataDisplay_id[i]).id;
		getData(dataDisplay_Number[i], id)
	}
}
(function createDataDisplay() {
	for(var i = 0; i < dataDisplay_name.length; i++) {
		var div = document.createElement('div');
		div.className = "dataDisplay_right";
		var span1 = document.createElement('span');
		span1.className = "dataDisplay_name";
		span1.innerHTML = dataDisplay_name[i];
		div.appendChild(span1);
		var span2 = document.createElement('span');
		span2.className = "dataDisplay_Number";
		span2.id = dataDisplay_id[i];
		span2.innerHTML = 0;
		div.appendChild(span2);
		document.getElementById('div_right').appendChild(div);
	}
	increaseData();
})()
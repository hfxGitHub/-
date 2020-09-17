function getData(t,id) {
	var arr = [];
	arr = t.split(',');
	var target = "";
	for(var i = 0; i < arr.length; i++) {
		target += arr[i];
	}
	t = parseFloat(target);
	upData(t,id);
}

function upData(target,id) {
	var num = 0;
	var a = 0;
	var time = setInterval(function() {
		num = parseFloat(num);
		if(a<1) {
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

function Transform(n) {
	var s = "";
	while(n) {
		var j = n % 1000;
		n = parseInt(n / 1000);
		if(n) {
			s = "," + j + s;
		} else {
			s = j + s;
		}
	}
	return s;
}
	var t = document.getElementById('span_userNumber').innerHTML;
	var tid = document.getElementById('span_userNumber').id;
getData(t,tid);
var h=document.getElementById('span_totalUserNumber').innerHTML;
var hid=document.getElementById('span_totalUserNumber').id;
getData(h,hid);
var f=document.getElementById('span_payNumber').innerHTML;
var fid=document.getElementById('span_payNumber').id;
getData(f,fid);
var x=document.getElementById('span_totalPayNumber').innerHTML;
var xid=document.getElementById('span_totalPayNumber').id;
getData(x,xid);

var TodayTreat = {
	title: {
		text: '今日论文数',
		x: 'center', //标题居中
		top: 20,
		textStyle: {
			color: '#fff'
		}
	},
	tooltip: { //鼠标移入,显示气泡
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color: ['rgb(225,96,80)', 'rgb(241,145,96)', 'rgb(161,112,241)', 'rgb(241,209,96)', 'rgb(129,209,80)', 'rgb(96,161,241)'], //颜色
	series: [{
		name: '专利数',
		type: 'pie', //图表类型
		radius: '55%', //大小
		hoverAnimation: true,
		center: ['50%', '50%'], //位置
		data: [{
				value: 335,
				name: '北京市'
			},
			{
				value: 310,
				name: '广州市'
			},
			{
				value: 274,
				name: '上海市'
			},
			{
				value: 235,
				name: '重庆市'
			},
			{
				value: 400,
				name: '深圳市'
			},
			{
				value: 200,
				name: '其他'
			}
		].sort(function(a, b) {
			return a.value - b.value;
		}),
		itemStyle: {
			normal: {
				label: {
					show: true, //是否显示文字
					textStyle: {
						fontSize: "10em"
					},
					formatter: function(p) { //指示线对应文字
						return p.name + "\n" + p.percent + "%";
					}
				},
				labelLine: {
					show: true, //是否显示指示线
					length: 0.001
				},
				labelLine: { //指示线状态
					show: true,
					smooth: 0.2,
					length: 10,
					length2: 20
				}
			}
		},
		roseType: 'radius',
		animationType: 'scale',
		animationEasing: 'elasticOut',
		animationDelay: function(idx) {
			return Math.random() * 200;
		}
	}]
};
var TodayTreat_e = {
	title: {
		text: '今日成果数',
		x: 'center', //标题居中
		top: 20,
		textStyle: {
			color: '#fff'
		}
	},
	//hover显示的文字
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color: ['rgb(225,96,80)', 'rgb(241,145,96)', 'rgb(161,112,241)', 'rgb(241,209,96)', 'rgb(129,209,80)', 'rgb(96,161,241)'], //颜色
	series: [{
		name: '总计数',
		type: 'pie', //图表类型
		radius: '55%',
		center: ['50%', '50%'],
		data: [{
				value: 735,
				name: '北京市'
			},
			{
				value: 400,
				name: '广州市'
			},
			{
				value: 374,
				name: '上海市'
			},
			{
				value: 135,
				name: '重庆市'
			},
			{
				value: 400,
				name: '深圳市'
			},
			{
				value: 300,
				name: '其他'
			}
		].sort(function(a, b) {
			return a.value - b.value;
		}),
		itemStyle: {
			normal: {
				label: {
					show: true, //是否显示文字
					textStyle: {
						fontSize: "10em"
					},
					formatter: function(p) { //指示线对应文字
						return p.name + "\n" + p.percent + "%";
					}
				},
				labelLine: {
					show: true, //是否显示指示线
					length: 0.001
				},
				labelLine: { //指示线状态
					show: true,
					smooth: 0.2,
					length: 10,
					length2: 20
				}
			}
		},
		roseType: 'radius', //长短不一	
		animationType: 'scale',
		animationEasing: 'elasticOut',
		animationDelay: function(idx) {
			return Math.random() * 200;
		}
	}]
};
var Treat = {
	title: {
		text: "论文数",
		x: "center",
		textStyle: {
			color: '#fff'
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: { //hover的点
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},
	grid: {
		borderWidth: 0 //去掉边框
	},
	toolbox: {
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	//x轴
	xAxis: [{
		splitLine: {
			show: false
		},
		type: 'category',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		axisPointer: {
			type: 'shadow',

		},
		axisLabel: {
			show: true, //是否显示坐标轴
			textStyle: {
				color: '#fff' //坐标轴颜色
			}
		}
	}],
	//y轴
	yAxis: [{
		splitLine: {
			show: false
		},
		show: true, //是否显示y轴
		type: 'value',
		min: 0,
		max: 250,
		interval: 50,
		axisLabel: {
			formatter: '{value} 篇', //坐标轴单位
			textStyle: {
				color: "#fff" //坐标轴颜色
			}
		}
	}],
	series: [{ //柱形图
			name: '论文数',
			type: 'bar',
			color: 'blue',
			center: ['50%', '50%'],
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 125.6, 252.2, 240.7, 230.8, 249.0, 235.3, 125.6, 252.2, 240.7, 230.8, 249.0, 235.3, 255, 260],
			barWidth: 10, //柱子宽度
			itemStyle: {
				normal: {
					label: {
						show: false
					}, //柱形图上不显示文字
					color: 'rgb(96,193,241)' //柱子颜色
				}
			},
		},
		{ //折线图
			name: '趋势',
			type: 'line',
			symbol: 'none', //去掉折线图的小圆点
			yAxisIndex: 0, //折线根据哪一个数据变化
			itemStyle: {
				normal: {
					lineStyle: {
						color: "rgb(60,96,90)"
					} //折线颜色
				}
			},
			data: [2.0, 2.2, 3.3, 6.5, 8.3, 12.2, 20.3, 33.4, 60.0, 80.5, 110.0, 120.2, 110, 140, 130, 80.5, 110.0, 120.2, 110, 140]
		},
	]
};
var Treat_e = {
	title: {
		text: "成果",
		x: "center",
		textStyle: {
			color: '#fff'
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: { //hover的点
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},
	grid: {
		borderWidth: 0 //去掉边框
	},
	toolbox: {
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	//x轴
	xAxis: [{
		splitLine: {
			show: false
		},
		type: 'category',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		axisPointer: {
			type: 'shadow'
		},
		axisLabel: {
			show: true, //是否显示x轴
			textStyle: {
				color: '#fff' //坐标轴颜色
			}
		}
	}],
	//y轴
	yAxis: [{
		splitLine: {
			show: false
		},
		show: true,
		type: 'value',
		min: 0,
		max: 250,
		interval: 50,
		axisLabel: {
			formatter: '{value} 项',
			textStyle: {
				color: "#fff" //坐标轴颜色
			}
		}
	}],
	series: [{ //柱形图
			name: '成果',
			type: 'bar',
			color: 'blue',
			center: ['50%', '50%'],
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 125.6, 252.2, 240.7, 230.8, 249.0, 235.3, 125.6, 252.2, 240.7, 230.8, 249.0, 235.3, 255, 260],
			barWidth: 10, //柱子宽度
			itemStyle: {
				normal: {
					label: {
						show: false
					}, //柱形图上不显示文字
					color: 'rgb(96,193,241)' //柱子颜色
				}
			},
		},
		{ //折线图
			name: '趋势',
			type: 'line',
			symbol: 'none', //去掉折线图的小圆点
			yAxisIndex: 0, //折线根据哪一个数据变化
			itemStyle: {
				normal: {
					lineStyle: {
						color: "rgb(60,96,90)"
					} //折线颜色
				}
			},
			data: [2.0, 2.2, 3.3, 6.5, 8.3, 12.2, 20.3, 33.4, 60.0, 80.5, 110.0, 120.2, 110, 140, 130, 80.5, 110.0, 120.2, 110, 140]
		},
	]
};
// 路径配置
require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
require(
	[
		'echarts',
		'echarts/chart/pie',
		'echarts/chart/bar',
		'echarts/chart/line',
		// 使用柱状图就加载bar模块，按需加载
	],
	function(ec) {
		// 基于准备好的dom，初始化echarts图表
		var circularChart = ec.init(document.getElementById('pieChart'));
		// 为echarts对象加载数据 
		circularChart.setOption(TodayTreat);

		var circularChart_e = ec.init(document.getElementById('pieChart_e'));
		circularChart_e.setOption(TodayTreat_e);

		var lineChart = ec.init(document.getElementById('lineChart'));
		lineChart.setOption(Treat);

		var lineChart_e = ec.init(document.getElementById('lineChart_e'));
		lineChart_e.setOption(Treat_e);
	}
);

//////////////////////////////////////////

d3.csv("data/allProvinceData.csv", function(dataset) {
	d3.csv("data/sichuan.csv", function(data_sc) {
		d3.csv("data/mianyang1.csv", function(data_my) {
				var data = [];
				var geoCoordMap = {};
				data_my.forEach(function(d) {
					if(d.score != "") {
						data.push({
							name: d.name,
							value: d.score
						});
					}
					geoCoordMap[d.name] = [d.lng, d.lat];
				})

				var provinceDataset = [];
				var sichuanDataset = [];
				var mianyangDataset = [];
				dataset.forEach(function(d) {
					provinceDataset.push({
						name: d.Provinces,
						value: (d.Index * 100).toFixed(4)
					});
				})
				data_sc.forEach(function(d) {
					sichuanDataset.push({
						name: d.name,
						value: (d.index * 100).toFixed(2)
					});
				})

				var myChart = echarts.init(document.getElementById('main'));

				option = {
					backgroundColor: 'rgb(64,64,80)',
					title: {
						text: '',
						subtext: '各省情况 ',
						left: 'left',
						top: '5%',

						subtextStyle: {
							color: '#ECF0F1',
							fontSize: 15
						}
					},
					tooltip: {
						show: true,
						trigger: 'item'
					},

					visualMap: {
						show: false,
						min: 0,
						max: 13,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'], // 文本，默认为数值文本
						inRange: {
							color: ["rgb(80,112,129)", "rgb(48,96,129)"],
						},
						calculable: true,
						realtime: true,
						textStyle: {
							color: 'white'
						}
					},
					series: [{
						name: '军民融合数据',
						type: 'map',
						mapType: 'china',
						data: provinceDataset,
						showEffectOn: 'render',
						rippleEffect: {
							brushType: 'stroke'
						},
						hoverAnimation: true,
						itemStyle: {
							normal: {
								color: 'white',
								shadowBlur: 3,
								shadowColor: '#000'
							}

						},

						zlevel: 1,
						label: {
							normal: {
								formatter: '{b}',
								position: 'left',
								show: true,
								textStyle: {
									color: '#fff'
								}
							},
							emphasis: {
								show: true

							},

						},

					}]
				};

				myChart.setOption(option);

				myChart.on('click', function(params) {
					var city = params.name;
					if(city == "四川") {
						$('#backBtn').show();
						option.title.subtext = '四川各市情况';

						option.series[0].mapType = city;

						option.series[0].data = sichuanDataset;

						option.visualMap.max = 9;

						myChart.setOption(option);

					}
				})

				/*
				 * 点击返回上一级事件
				 * 
				 */
				$('#backBtn').click(function() {
					if(option.series[0].mapType == "四川") {
						$("#backBtn").hide();
						option = {
							backgroundColor: 'rgb(64,64,80)',
							title: {
								//									
								subtext: '各省情况',
								left: 'left',
								top: '5%',

								subtextStyle: {
									color: '#ECF0F1',
									fontSize: 15
								}
							},
							tooltip: {
								trigger: 'item'
							},

							visualMap: {
								show: false,
								min: 0,
								max: 13,
								left: 'left',
								top: 'bottom',
								text: ['高', '低'], // 文本，默认为数值文本
								inRange: {
									color: ["rgb(80,112,129)", "rgb(48,96,129)"],
								},
								calculable: true,
								realtime: true,
								textStyle: {
									color: 'white'
								}
							},
							series: [{
								name: '军民融合数据',
								type: 'map',
								mapType: 'china',
								data: provinceDataset,
								showEffectOn: 'render',
								rippleEffect: {
									brushType: 'stroke'
								},
								hoverAnimation: true,
								itemStyle: {
									normal: {
										color: 'white',
										shadowBlur: 3,
										shadowColor: '#000'
									}

								},

								zlevel: 1,
								label: {
									normal: {
										formatter: '{b}',
										position: 'left',
										show: true,
										textStyle: {
											color: '#fff'
										}
									},
									emphasis: {
										show: true

									},

								},

							}]
						};

						myChart.setOption(option);
					}
				})

				myChart.on('click', function(params) {
					var city = params.name;
					if(city == "绵阳市") {
						var convertData = function(data) {
							var res = [];
							for(var i = 0; i < data.length; i++) {
								var geoCoord = geoCoordMap[data[i].name];
								if(geoCoord) {
									res.push({
										name: data[i].name,
										value: geoCoord.concat(data[i].value)
									});
								}
							}
							return res;
						};

						option = {
							backgroundColor: 'rgb(64,64,80)',
							title: {
								subtext: '绵阳市军民融合企业',
								left: 'left',
								top: '5%',

								subtextStyle: {
									color: '#ECF0F1',
									fontSize: 15
								}
							},
							tooltip: {
								show: false,
								trigger: 'item'
							},
							visualMap: {
								show: false,
								min: 65,
								max: 100,
								left: 'left',
								top: 'bottom',
								text: ['高', '低'], // 文本，默认为数值文本
								inRange: {
									color: ["rgb(80,112,129)", "rgb(48,96,129)"],
								},
								calculable: true,
								textStyle: {
									color: '#fff'
								}
							},
							geo: {
								map: '绵阳市',
								label: {
									normal: {
										show: true,
										textStyle: {
											color: 'white'
										}
									},
									emphasis: {
										show: true,
									}
								},
								roam: true,
								itemStyle: {
									normal: {
										areaColor: '#7ECEFD',
										borderColor: '#2C3E50',
										shadowBlur: 3,
										shadowColor: '#000'
									},
									emphasis: {
										areaColor: '#FF7F66'
									}
								}
							},
							series: [{
								name: '绵阳市军民融合企业',
								type: 'scatter',
								coordinateSystem: 'geo',
								data: convertData(data),
								//								symbolSize: function(val) {
								//									return(val[2] - 65) / 3;
								//								},
								label: {
									normal: {
										formatter: '{b}',
										position: 'right',
										show: false
									},
								},
								itemStyle: {
									normal: {
										color: '#ddb926'
									}
								}
							}, {
								name: 'Top 3',
								type: 'effectScatter',
								coordinateSystem: 'geo',
								data: convertData(data.sort(function(a, b) {
									return b.value - a.value;
								}).slice(0, 1)),
								symbolSize: function(val) {
									return(val[2] - 65) / 3;
								},
								showEffectOn: 'render',
								rippleEffect: {
									brushType: 'stroke'
								},
								hoverAnimation: true,
								label: {
									normal: {
										show: false,
										formatter: '-----{b}',
										position: 'right',
										margin: 30,
										rotate: 45,
									}
								},
								itemStyle: {
									normal: {
										color: '#FF4C29',
										shadowBlur: 10,
										shadowColor: '#333'
									}
								},
								zlevel: 1
							}, {
								name: 'Top 3',
								type: 'effectScatter',
								coordinateSystem: 'geo',
								data: convertData(data.sort(function(a, b) {
									return b.value - a.value;
								}).slice(1, 2)),
								symbolSize: function(val) {
									return(val[2] - 65) / 3;
								},
								showEffectOn: 'render',
								rippleEffect: {
									brushType: 'stroke'
								},
								hoverAnimation: true,
								label: {
									normal: {
										show: false,
										formatter: '-----{b}',
										position: 'right',
										margin: 30,
										rotate: 45,
									}
								},
								itemStyle: {
									normal: {
										show: false,
										color: '#FF4C29',
										shadowBlur: 10,
										shadowColor: '#333'
									}
								},
								zlevel: 1
							}, {
								name: 'Top 3',
								type: 'effectScatter',
								coordinateSystem: 'geo',
								data: convertData(data.sort(function(a, b) {
									return b.value - a.value;
								}).slice(2, 3)),
								symbolSize: function(val) {
									return(val[2] - 65) / 3;
								},
								showEffectOn: 'render',
								rippleEffect: {
									brushType: 'stroke'
								},
								hoverAnimation: true,
								label: {
									normal: {
										show: false,
										formatter: '{b}------',
										position: 'left',
										margin: 30,
										rotate: 45,
									}
								},
								itemStyle: {
									normal: {
										show: false,
										color: '#FF4C29',
										shadowBlur: 10,
										shadowColor: '#333'
									}
								},
								zlevel: 1
							}]
						};

						myChart.setOption(option);
						myChart.on('click', function(params, e) {
							if(params.componentType !== "geo") return;
							getBoundary(params.name);
							$("#BMap_back").css("display", "block");
							$("#allmap").css("display", "block");
						}, false);

						//点击按钮返回上一级
						$('#backBtn').click(function() {
							if(option.geo == undefined) return;
							if(option.geo.map == "绵阳市") {
								$('#backBtn').show();
								myChart.clear();
								d3.csv("data/sichuan.csv", function(data_sc) {
									option = {
										backgroundColor: 'rgb(64,64,80)',
										title: {
											subtext: '四川各市情况',
											left: 'left',
											top: '5%',

											subtextStyle: {
												color: '#ECF0F1',
												fontSize: 15
											}
										},
										tooltip: {
											trigger: 'item'
										},

										visualMap: {
											show: false,
											min: 0,
											max: 9,
											left: 'left',
											top: 'bottom',
											text: ['高', '低'], // 文本，默认为数值文本
											inRange: {
												color: ["rgb(80,112,129)", "rgb(48,96,129)"],
											},
											calculable: true,
											textStyle: {
												color: '#fff'
											}
										},
										series: [{
											name: '军民融合数据',
											type: 'map',
											mapType: '四川',
											data: sichuanDataset,
											showEffectOn: 'render',
											rippleEffect: {
												brushType: 'stroke'
											},
											hoverAnimation: true,
											itemStyle: {
												normal: {
													color: '#fff',
													shadowBlur: 3,
													shadowColor: '#000'
												}
											},

											zlevel: 1,
											label: {
												normal: {

													formatter: '{b}',
													position: 'left',
													show: true,
													textStyle: {
														color: '#fff'
													}
												},
												emphasis: {
													show: true
												},

											},

										}]
									};

									myChart.setOption(option);
								});
							}
						})

					}
				});
			}

		)

	})

});
var option_rankingChart = {
	title: {
		text: "TOP专利",
		x: 'center',
		textStyle: {
			color: 'white',
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		borderWidth: 0,
		containLable: true
	},

	minInterval: 1,
	xAxis: {
		show: false,
		type: 'value',
		boundaryGap: [0, 0.01]
	},
	yAxis: {
		show: false,
		type: 'category',
		data: ["第七商厦", "第六商厦", "第五商厦", "第四商厦", "第三商厦", "第二商厦", "第一商厦"]
	},
	series: [{
		name: '2011年',
		type: 'bar',
		data: [636230, 630231, 634230, 630240, 630730, 630230, 638767],
		barWidth: 15,
		barGap: 10,
		itemStyle: {
			normal: {
				color: function(params) {
					// build a color map as your need.
					var colorList = ['rgb(96,96,241)', 'rgb(225,96,80)', 'rgb(241,145,96)', 'rgb(161,112,241)', 'rgb(241,209,96)', 'rgb(129,209,80)', 'rgb(96,161,241)']; //颜色

					return colorList[params.dataIndex]
				},
				label: {
					formatter: '{b}',
					show: true,
					position: 'insideRight',
				}
			}
		}

	}]
}
// 路径配置
require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
require(
	[
		'echarts',
		'echarts/chart/pie',
		'echarts/chart/bar',
		'echarts/chart/line',
		// 使用柱状图就加载bar模块，按需加载
	],

	function(ec) {
		// 基于准备好的dom，初始化echarts图表
		var circularChart = ec.init(document.getElementById('rankingChart'));
		//				// 为echarts对象加载数据 
		circularChart.setOption(option_rankingChart);
	}
);

function getCss() {
	var h = $(window).height();
	var w = $(window).width();
	$("#main").css({
		"width": w * 0.52,
		"height": h * 0.7
	});
	$("#div_right").css({
		"width": w * 0.12,
		"height": h * 0.7
	});
	$("#div_righttable").css({
		"width": w * 0.36,
		"height": h * 0.33
	});
	$("#pieChart").css({
		"width": w * 0.25,
		"height": h * 0.3
	});
	$("#pieChart_e").css({
		"width": w * 0.3,
		"height": h * 0.3
	});
	$("#lineChart").css({
		"width": w * 0.38,
		"height": h * 0.33
	});
	$("#lineChart_e").css({
		"width": w * 0.35,
		"height": h * 0.3
	});
}

getCss();
$("#backBtn").mouseover(function() {
	$("#backBtn").addClass("backBtn");
});
$("#backBtn").mouseleave(function() {
	$("#backBtn").removeClass("backBtn");
});
$("#home").mouseover(function() {
	$("#home").addClass("Home");
});
$("#home").mouseleave(function() {
	$("#home").removeClass("Home");
});
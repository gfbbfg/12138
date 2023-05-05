<template>
	<div id="app" @mousemove="move" @mousedown="down">
		<div class="chat"><div class="chatt"><div class="shang">chat with me</div><ul class="zhong" ref="zhong"><li  v-for="i in mssg" ><div :style="{float:`${i.lr}`}">{{i.val}}</div></li></ul><div class="xia"><input class="form-control" id="xia" v-model="myword"/><div id="go" class="btn-group" role="group" aria-label="..."><button  is="gogo" type="button" class="btn btn-default" @click="sendmsg"><p>go</p></button></div></div></div></div>
		<div class="top">
			<div class="input-group">
				<span class="input-group-addon" id="sizing-addon2"></span>
				<input v-model="msg" type="text" class="form-control" placeholder="mission" aria-describedby="sizing-addon2">
			</div>
			<div class="btn-group" role="group" aria-label="...">
				<button type="button" class="btn btn-default" @click="add">add</button>
				<button type="button" class="btn btn-default" @click="add3">all</button>
				<button type="button" class="btn btn-default" @click="add1">doing</button>
				<button type="button" class="btn btn-default" @click="add2">done</button>
			</div>
		</div>
		<div v-if="sym==0">
			<ul class="list-group">
				<li class="list-group-item" v-for="i in coco" :key="i.id">
					<input type="checkbox" v-model="i.state" /><div style="margin-top:7px;">{{i.val}}</div><div v-if="i.state" style="margin-left:30px;margin-top:7px;">{{tip1}}</div><div v-else style="margin-left:30px;margin-top:7px">{{tip2}}</div><div class="btn-group" role="group" aria-label="..." style="margin-left:30px;"><button type="button" class="btn btn-default" @click="del(i.id)">del</button></div>
				</li>
			</ul>
		</div>
		<div v-if="sym==1">
			<ul class="list-group">
				<li class="list-group-item" v-for="i in coco1" :key="i.id">
					<input type="checkbox" v-model="i.state" /><div style="margin-top:7px;">{{i.val}}</div><div v-if="i.state" style="margin-left:30px;margin-top:7px;">{{tip1}}</div><div v-else style="margin-left:30px;margin-top:7px">{{tip2}}</div><div class="btn-group" role="group" aria-label="..." style="margin-left:30px;"><button type="button" class="btn btn-default" @click="del1(i.id)">del</button></div>
				</li>
			</ul>
		</div>
		<div v-if="sym==2">
			<ul class="list-group">
				<li class="list-group-item" v-for="i in coco2" :key="i.id">
					<input type="checkbox" v-model="i.state" /><div style="margin-top:7px;">{{i.val}}</div><div v-if="i.state" style="margin-left:30px;margin-top:7px">{{tip1}}</div><div v-else style="margin-left:30px;margin-top:7px;">{{tip2}}</div><div class="btn-group" role="group" aria-label="..." style="margin-left:30px;"><button type="button" class="btn btn-default" @click="del2(i.id)">del</button></div>
				</li>
			</ul>
		</div>
		<div class="a" :style="{left:`${cx-10}px`,top:`${cy-10}px`}"></div>
		<div class="b" :style="{left:`${cx-15}px`,top:`${cy-15}px`}"></div>
		<div class="c" :style="{left:`${cx-20}px`,top:`${cy-20}px`}"></div>
		<div class="d" :style="{left:`${cx-25}px`,top:`${cy-25}px`}"></div>
	</div>
	<div class="gfb">
		<div class="roll"><canvas  width="100" height="100" @click="circle" class="ctx1"></canvas><div class="roll1"></div></div>
		<h1>计划表</h1>
		<ddd></ddd>
		{{city}}天气
		<div id="main" style="width:400px;height:250px;"></div>
		<d></d>
	</div>
	<img src="./assets/555.jpg" />
	
</template>

<script>
	import axios from 'axios'
	import * as echarts from 'echarts'
export default {
  mounted(){
	L2Dwidget.init({
				pluginRootPath: "live2dw/",
				pluginJsPath: "lib/",
				pluginModelPath: "assets/",
				tagMode: !1,
				debug: !1,
				model: {
					scale: 2,
					jsonPath: "live2dw/assets/asuna_33.model.json"
				},
				display: {
					position: "left",
					width: 130,
					height: 210,
					hOffset: 500,
					vOffset:0 
				},
				mobile: {
					show: !1
				},
				log: !1
			});
	let mao=this;axios.get('https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=').then(function(res){mao.meta=res.data.data;mao.city=res.data.city;console.log(res);var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: false,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [mao.meta[0].day,mao.meta[1].day,mao.meta[2].day,mao.meta[3].day,mao.meta[4].day,mao.meta[5].day,mao.meta[6].day]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [mao.meta[0].tem1,mao.meta[1].tem1, mao.meta[2].tem1, mao.meta[3].tem1, mao.meta[4].tem1, mao.meta[5].tem1, mao.meta[6].tem1],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [mao.meta[0].tem2,mao.meta[1].tem2,mao.meta[2].tem2,mao.meta[3].tem2,mao.meta[4].tem2,mao.meta[5].tem2,mao.meta[6].tem2],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};

option && myChart.setOption(option);});let sss=100;let ctx11=document.querySelector('.ctx1');let ctx1 = ctx11.getContext('2d');ctx1.beginPath();ctx1.strokeStyle='blue';setInterval(function(){ctx1.moveTo(50,50);if(sss>0){ctx1.lineTo(sss,Math.sqrt(2500-(sss-50)*(sss-50))+50);ctx1.stroke();sss=sss-0.05;}else{ctx1.lineTo(-sss,50-Math.sqrt(2500-(-sss-50)*(-sss-50)));ctx1.stroke();sss=sss-0.05;if(sss<-100){ctx11.width=ctx11.width;sss=100;ctx1.strokeStyle='blue'}}},1);},
  data(){return{city:'',meta:[],mssg:[],myword:'',r:50,idd:0,msg:'',coco:[],tip1:'doing',tip2:'done',coco1:[],coco2:[],coco3:[],sym:0,cx:0,cy:0}},
  methods:{async sendmsg(){var mywords={val:'',lr:''};mywords.val=this.myword;mywords.lr='right';this.mssg.push(mywords);if(this.$refs.zhong.offsetHeight>400){this.$refs.zhong.style.marginTop=-(this.$refs.zhong.offsetHeight-400)+'px'};let papapa=this.myword;let pa=this.mssg;let mowo=this;const {data:res}=await axios.get('http://www.liulongbin.top:3006/api/robot',{params:{spoken:papapa}});var xs={val:res.data.info.text,lr:'left'};pa.push(xs);if(mowo.$refs.zhong.offsetHeight>400){mowo.$refs.zhong.style.marginTop=-(mowo.$refs.zhong.offsetHeight-400)+'px'}},initcanvas(){},del2(id){for(var i=0;i<this.coco2.length;i++){if(this.coco2[i].id==id){this.coco2.splice(i,1)}};for(var i=0;i<this.coco.length;i++){if(this.coco[i].id==id){this.coco.splice(i,1)}}},del1(id){for(var i=0;i<this.coco1.length;i++){if(this.coco1[i].id==id){this.coco1.splice(i,1)}};for(var i=0;i<this.coco.length;i++){if(this.coco[i].id==id){this.coco.splice(i,1)}}},del(id){for(var i=0;i<this.coco.length;i++){if(this.coco[i].id==id){this.coco.splice(i,1)}}},down(e){},move(e){this.cx=e.clientX;this.cy=e.clientY;},add3(){this.sym=0;},add2(){this.coco2=[];this.sym=2;for(var i=0;i<this.coco.length;i++){if(this.coco[i].state==false){this.coco2.push(this.coco[i])}}},add1(){this.coco1=[];this.sym=1;for(var i=0;i<this.coco.length;i++){if(this.coco[i].state==true){this.coco1.push(this.coco[i])}}},add(){this.sym=0;if(this.msg==''){alert('input mission')}else{let a={val:'',state:true,id:this.idd};this.idd++;a.val=this.msg;this.coco.push(a);this.msg=''}}},
  computed:{}
}
</script>
<style scoped>
	img{
		position:fixed;
		z-index:-1;
		top:0;
	}
	#go button p{
		position:absolute;
		top:0;
	}
	#go button{
		position:absolute;
		width:50px;
		height:30px;
	}
	#go{
		width:50px;
		height:30px;
		font-size:smaller;
		background-color:lightcoral;
		margin-left:30px;
	}
	.chatt{
		width:100%;
		position:relative;
		border:1px solid orange;
		height:500px;
	}
	.shang{
		width:100%;
		height:50px;
		background-color:orange;
		text-align:center;
		position:absolute;
		left:0;
		top:0;
	}
	.btn-group{
		background-color:deepskyblue;
	}
	.input-group {
		width: 500px;
		height: 50px;
	}
	.top{
		display:flex;
		width:700px;
		height:50px;
	}
	.list-group{
		width:700px;
		height:50px;
	}
	.list-group-item{
		display:flex;
		opacity:0.8;
	}
	.bot {
		margin-top:10px;
	}
	#app{
		height:500px;
		border-radius:5px;
		opacity:0.8;
	}
	.a{
		position:fixed;
		width:25px;
		height:25px;
		background-color:brown;
		z-index:-1;
		border-radius:5px;
	}
	.b {
		position: fixed;
		width: 25px;
		height: 25px;
		background-color: gold;
		z-index: -1;
		border-radius:5px;
	}
	.c {
		position: fixed;
		width: 25px;
		height: 25px;
		background-color: gold;
		z-index: -1;
		border-radius:5px;
	}
	.d {
		position: fixed;
		width: 25px;
		height: 25px;
		background-color: yellow;
		z-index: -1;
		border-radius:5px;
	}
	.rd{
		border:1px solid;
		border-radius:50%;
	}
	.roll{
		position:relative;
		width:150px;
		height:150px;
	}
	.roll1{
		width:60px;
		height:60px;
		border:1px solid;
		border-radius:50%;
		position:absolute;
		top:20px;
		left:20px;
		background-color:aliceblue;
		z-index:3;
		opacity:0.9;
	}
	.ctx1{}
	.ctx2{
		position:absolute;
		left:0;
		top:0;
	}
	.chat{
		width:300px;
		height:50px;
		border:1px solid aqua;
		position:fixed;
		left:710px;
		transition:all 1s;
		overflow:hidden;
		border-radius:5px;
		z-index:3;
	}
	.chat:hover{
		height:500px;
	}
	.zhong{
		width:100%;
		margin-top:50px;
		margin-bottom:50px;
		margin-left:-20px;
	}
	.xia{
		width:100%;
		position:absolute;
		bottom:0;
		left:0;
		height:50px;
		background-color:orange;
		display:flex;
	}
	#xia{
		width:200px;
		height:30px;
		margin-left:0;

	}
	.zhong li{
		list-style-type:none;
		padding:5px;
		width:100%;
		height:50px;
	}
	.zhong li div{
		width:100px;
		height:50px;
		border:1px solid orange;
		font-size:smaller;
		font-weight:bold;
		border-radius:5px;
		text-align:center;
	}
	.gfb{
		display:flex;
	}
	#main{
		width:400px;
		height:250px;
	}
</style>

<template>
	<div class="ddd">
		{{time}}
		<div class="boli"></div>
	</div>
	
</template>
<script>
	import axios from 'axios'
	export default{mounted(){var t=this;setInterval(function(){var d=new Date();t.time=d.toLocaleString();},1000)},methods:{},emits:[],props:[],data(){return{time:''}}}
</script>
<style scoped>
	.ddd {
		font-weight:bold;
		width: 100px;
		height: 150px;
		border-radius: 5px;
		margin-left:30px;
		position:relative;
		margin-right:30px;
	}

</style>
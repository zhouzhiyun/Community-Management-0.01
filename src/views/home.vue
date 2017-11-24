
<template>
	<div>
		<div id="map"></div>
		<building-deatils  v-if="this.$store.state.show"></building-deatils>
        <my-sidebar></my-sidebar>
		<my-search></my-search>
		<my-details v-if="this.$store.state.detailsShow"></my-details>
        <recorded></recorded>
<<<<<<< HEAD
        <message></message>
        <event-handing></event-handing>
        
=======
        <user-manage v-if="this.$store.state.usermanage"></user-manage>
>>>>>>> 17e6afb0fd203cf00f56c3f425e7b1ada48183e2
	</div>
</template>

<script>
    import axios from 'axios';
    import mySidebar from '../components/sidebar.vue';
	import mySearch from '../components/search.vue';
	import myDetails from '../components/details.vue';
	import buildingDeatils from "../components/bdetails.vue";
    import recorded from '../components/recorded.vue';
<<<<<<< HEAD
    import eventHanding from '../components/eventHandling.vue';
    import message from '../components/message.vue';
=======
    import Highcharts from 'highcharts';
    import userManage from "../components/usermanagement.vue";

>>>>>>> 17e6afb0fd203cf00f56c3f425e7b1ada48183e2
	// 添加环形遮罩层
	function createRingOverlay (corver, map){
        // 添加环形遮罩层
        var strs = [];
        corver.forEach(function(e) {
            var string = e.lng + ',' + e.lat;
            strs.push(string)
        });
       
        var EN = "";
        for (var o = 0; o < strs.length; o++) {
            EN += strs[o] + ";"
        }
        
        var E_JW = "170.672126, 39.623555;";            //东
        var EN_JW = "170.672126, 81.291804;";       //东北角
        var N_JW = "105.913641, 81.291804;";        //北
        var NW_JW = "-169.604276,  81.291804;";     //西北角
        var W_JW = "-169.604276, 38.244136;";       //西
        var WS_JW = "-169.604276, -68.045308;";     //西南角
        var S_JW = "114.15563, -68.045308;";            //南
        var SE_JW = "170.672126, -68.045308 ;";         //东南角
        var ply1 = new BMap.Polygon(EN + E_JW + SE_JW + S_JW + WS_JW + W_JW + NW_JW + EN_JW + E_JW, { strokeColor: "none", fillColor: "rgb(246,246,246)", strokeOpacity: 1, fillOpacity:0.5}); //建立多边形覆盖物
        map.addOverlay(ply1);  //遮罩物是半透明的，如果需要纯色可以多添加几层
        var polygon = new BMap.Polygon(corver, {strokeColor:"blue", strokeWeight: 2, strokeOpacity: 1, fillOpacity: 0.00000001});
        map.addOverlay(polygon); 
	}

	 // 添加社区
	function createCommunity (xq, sq, map){
		var polyg = new BMap.Polygon(xq, {strokeColor:"red",strokeStyle: "dashed", strokeWeight: 2, strokeOpacity: 1, fillOpacity: 0.00000001});
        map.addOverlay(polyg);
        sq.forEach(function(ele){
            var point = new BMap.Point(ele.lng, ele.lat);
            var opts = {
                position : point,   // 指定文本标注所在的地理位置
                // offset: new BMap.Size(-10, -10)
            };
            var label = new BMap.Label(ele.text, opts);
            label.setStyle({
                color : "blue",
                fontSize : "12px",
                height : "16px",
                lineHeight : "16px",
                fontFamily:"微软雅黑",
                border: "none",
                backgroundColor: "rgba(0,0,0,0)",
                fontWeight: "800"
            });
            map.addOverlay(label);
        })
	}
	
	// 山水园社区楼号和单元
	function creatCorver (building, map, that){
       
        building.forEach(function(e) {
            var point = new BMap.Point(e.lng, e.lat)
            if(e.text == "15#" || e.text == "16#" || e.text == "17#" || e.text == "18#"){
                creatPie(point , that , e.text, map);
            }else{
                var opts = {
                position : point,   // 指定文本标注所在的地理位置
                offset: new BMap.Size(-10, -10)
            }
            var label = new BMap.Label(e.text, opts);  // 创建文本标注对象
            label.setStyle({
                color : "yellow",
                fontSize : "12px",
                height : "16px",
                lineHeight : "16px",
                fontFamily:"微软雅黑",
                border: "none",
                backgroundColor: "rgba(0,0,0,0)",
                fontWeight: "800"
			});
			label.addEventListener('click',function(){
                that.$store.commit('changeVal',{text:e.text});
                that.$store.commit('getData')
			})
			map.addOverlay(label);
            }
            
        });
    }

    // 添加覆盖物

    function creatPie (point , that , text , map){
        function CommunityOverlay(point, width){
            this._center = point;
            this._width = width;
        }

        CommunityOverlay.prototype = new BMap.Overlay();
        
        CommunityOverlay.prototype.initialize = function(){
            this._map = map;
            var div = document.createElement("div");  
            div.style.position = "absolute";
            div.style.width = this._width + "px";  
            div.style.height = this._width + "px";
            div.style.background = "transparent";
            map.getPanes().markerPane.appendChild(div);
            Highcharts.chart(div,{
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits:{
                    enabled: false // 禁用版权信息
                },
                title: {
                    text: ''
                },
                tooltip: {
                    headerFormat: '{series.name}br',
                    pointFormat: ''
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: false,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: 'b{point.name}b {point.percentage.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '浏览器访问量占比',
                    data: [
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        ['Safari',    8.5],
                        ['Opera',     6.2]
                    ]
                }]
            })

            div.addEventListener('click',function(){
                that.$store.commit('changeVal',{text: text});
                that.$store.commit('getData');
            })

            this._div = div;
            return div;
        }
        CommunityOverlay.prototype.draw = function(){
            var position = this._map.pointToOverlayPixel(this._center);
            this._div.style.left = position.x - this._width / 2 + "px";  
            this._div.style.top = position.y - this._width / 2 + "px";
        }
        var mySquare = new CommunityOverlay(point, 80);  
        
        map.addOverlay(mySquare);
        
    }

	export default{
		data(){
			return {
				
			}
		},
		methods: {
		},
		beforeCreate () {
			// this.$store.dispatch('saveForm');
		},
		mounted(){
			var vm = this;
			var map = new BMap.Map("map",{mapType:BMAP_SATELLITE_MAP});    // 创建Map实例
			map.centerAndZoom(new BMap.Point(118.839323, 32.116994), 15);
			map.enableScrollWheelZoom(true);
			map.setCurrentCity("南京");

			axios.get('data/index.json')
            .then(function (res) {
				map.addEventListener('tilesloaded',function(){
                    map.setMinZoom(15);
					map.clearOverlays();
					createRingOverlay(res.data.ringcover, map);
					if(map.getZoom() < 18){
						createCommunity(res.data.community, res.data.allcommunity, map);
					}
					if(map.getZoom() >= 18){
						creatCorver(res.data.building, map, vm);
					}
				})
			})
            .catch(function (error) {
              console.log(error);
            });
		},
		components: {
            buildingDeatils,
            mySidebar,
			mySearch,
			myDetails,
            recorded,
<<<<<<< HEAD
            eventHanding,
            message
=======
            userManage
>>>>>>> 17e6afb0fd203cf00f56c3f425e7b1ada48183e2
		}
	}
	
</script>

<style scoped>
#map{
	width: 100%;
	height: 100%;
}
</style>


// 星号：&#9734;     方块：&#9744;       对号：&#10004;   圆：&#927;   三角：&#916;

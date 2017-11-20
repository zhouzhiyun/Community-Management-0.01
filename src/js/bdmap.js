
import db from '../data/index.js';
import global from '../js/global.js';
import Highcharts from 'highcharts';

function CommunityOverlay(options){
	let _self = this;
	_self.type = 'community-overlay';
	_self.src = options.src;
	_self.src = options.src;
	_self.lng = options.lng;
	_self.lat = options.lat;
	_self.cameras = options.cameras;
	_self.buildings = options.buildings;
	_self.width = 32;
	_self.height = 32;
}

CommunityOverlay.prototype = new BMap.Overlay();

CommunityOverlay.prototype.initialize = function(map){  
	let _self = this;
	let obj = document.createElement('img');   
	obj.style.position = "absolute"; 
	obj.src = _self.src;
    let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
	obj.style.width = _self.width + "px";    
	obj.style.height = _self.height + "px";  
	obj.style.border = "none"; 
	map.getPanes().markerPane.appendChild(obj);	
	_self.obj = obj;
	_self.map = map;
	
	obj.addEventListener('click', function(){
		 map.clearOverlays();
		 map.centerAndZoom(new BMap.Point(_self.lng, _self.lat), 19); 
		 if(_self.buildings){
			_self.buildings.forEach(function(e){
				 let overlay = new BuildingOverlay(e);
				 map.addOverlay(overlay);
			 });
		 }
		 
		 if(_self.cameras){
			_self.cameras.forEach(function(e){
				 let overlay = new CameraOverlay(e);
				 map.addOverlay(overlay);
			 });
		 }
		 
	});
	return obj;
}

CommunityOverlay.prototype.draw  = function(){   
	let _self = this; 
	let map = _self.map;
	let obj = _self.obj;
	let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
}

CommunityOverlay.prototype.show  = function(){    
   
}

CommunityOverlay.prototype.hide  = function(){    
  
}

CommunityOverlay.prototype.toggle = function(){    
   
}

function BuildingOverlay(options){
	let _self = this;
	_self.type = 'building-overlay';
	_self.id = options.id;
	_self.lng = options.lng;
	_self.lat = options.lat;
	_self.d1 = options.d1;
	_self.d2 = options.d2;
	_self.floors = options.floors;
	_self.width = 120;
	_self.height = 120;
	
}

BuildingOverlay.prototype = new BMap.Overlay();

BuildingOverlay.prototype.initialize = function(map){  
    let _self = this;
	let obj = document.createElement('div');   
	obj.style.position = "absolute"; 
    let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
	obj.style.width = _self.width + "px";    
	obj.style.height = _self.height + "px";  
	obj.style.background = "rgba(0,0,0,0)";
	map.getPanes().markerPane.appendChild(obj);
	
	Highcharts.chart(obj, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
			backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
           text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
		legend: {                                                                    
            enabled: false                                                           
        },
		credits: {
			enabled: false
		},
        series: [{
            name: '比例',
            colorByPoint: true,
            data: _self.d1
        }]
    });
	
	obj.addEventListener('click', function(){
		if(_self.floors && _self.floors.length > 0){
			global.buildingDetails.show(true);
			global.buildingDetails.setValue(_self.floors);
		}
	});

	_self.obj = obj;
	_self.map = map;
	return obj;
}

BuildingOverlay.prototype.draw  = function(){    
    let _self = this; 
	let map = _self.map;
	let obj = _self.obj;
	let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
}

BuildingOverlay.prototype.show  = function(){    
   
}

BuildingOverlay.prototype.hide  = function(){    
  
}

BuildingOverlay.prototype.toggle = function(){    
   
}

function CameraOverlay(options){
	console.log(options);
	let _self = this;
	_self.type = 'camera-overlay';
	_self.id = options.id;
	_self.lng = options.lng;
	_self.lat = options.lat;
	_self.id = options.id;
	_self.url = options.url;
	_self.label = options.label;
	_self.temperature = options.temperature;
	_self.humidity = options.humidity;
	_self.width = 32;
	_self.height = 32;
}

CameraOverlay.prototype = new BMap.Overlay();

CameraOverlay.prototype.initialize = function(map){  
	let _self = this;
	let obj = document.createElement('div');   
	obj.style.position = "absolute"; 
    let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
	obj.style.width = _self.width + "px";    
	obj.style.height = _self.height + "px";      
	map.getPanes().markerPane.appendChild(obj);
	let el = '<button type="button" class="btn btn-info bmd-btn-fab bmd-btn-fab-sm"> \
			  <i class="material-icons">videocam</i>\
			  </button>';
	$(obj).append(el);
	
	obj.addEventListener('click', function(){
		global.videoPlayer.play({
			url: _self.url,
			label: _self.label,
			id: _self.id,
			temperature: _self.temperature,
			humidity: _self.humidity
			
		});
	});
	
	_self.obj = obj;
	_self.map = map;
	return obj;
}

CameraOverlay.prototype.draw  = function(){   
	let _self = this; 
	let map = _self.map;
	let obj = _self.obj;
	let pos = map.pointToOverlayPixel(new BMap.Point(_self.lng, _self.lat));
	obj.style.left = (pos.x - _self.width/2) + "px";
	obj.style.top = (pos.y - _self.height/2) + "px";
}

CameraOverlay.prototype.show  = function(){    
   
}

CameraOverlay.prototype.hide  = function(){    
  
}

CameraOverlay.prototype.toggle = function(){    
   
}


export {CommunityOverlay, BuildingOverlay, CameraOverlay};

// JavaScript Document
var map, layer;
var vectorLayer;
var vectorLayer1;
var vectorLayer2;
var vectorLayer3;
$(document).ready(function(){
//Xax dinh ham show(0) tu dong goi lai sau 10 giay
	setInterval(function(){		
		show(0);
	}, 5000);	
});

function on_add(){
			var x = parseFloat(myform.x.value);
			var y = parseFloat(myform.y.value);
			add_point(x,y);
			//window.alert("x = "+x);
			}
function showtext1(){
	//document.getElementById("map").style.visibility = "hidden";
	document.getElementById("map").style.display= "none";
	document.getElementById("c_text").style.display="block";
	//document.getElementById("c_text").innerHTML='';
	
}
function showmap(){
	//document.getElementById("map").style.visibility = "hidden";
	document.getElementById("map").style.display= "block";	
	document.getElementById("c_text").style.display="none";
	
	//"<iframe id="myframe" src="http://www.w3schools.com"></iframe>"
	
}
 function makedata(id){
		  var data = new google.visualization.DataTable();
		  data.addColumn('string', 'Data');
          data.addColumn('number', 'Salanity');
		  XMLDoc=getXMLDoc("point.php?id="+id);
		  
		  var point=XMLDoc.getElementsByTagName("data");
		  
		  window.alert("sometext : "+point.length);
		  	
		for (i=0;i<point.length;i++)
  		{   			
  			var date=point[i].getElementsByTagName('ngay')[0].childNodes[0].nodeValue.toString();
  			var value=parseInt(point[i].getElementsByTagName('value')[0].childNodes[0].nodeValue.toString());
			data.addRow([date,value]);
 		}
		  return data;
	  }
function addDiv(id){
	var e = document.createElement('div');
	e.setAttribute('id', id);

}


  function showpoint123(id){
	  	XMLDoc=getXMLDoc("pointview.php?id="+id);
		var pointname = document.getElementById("pointname");
		pointname.innerHTML=XMLDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue.trim();
		var pointid = document.getElementById("pointid");		
		pointid.innerHTML=XMLDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue.toString();		
		var pointx = document.getElementById("pointX");		
		pointx.innerHTML=XMLDoc.getElementsByTagName("Xcoordinate")[0].childNodes[0].nodeValue.toString();
		var pointy = document.getElementById("pointY");		
		pointy.innerHTML=XMLDoc.getElementsByTagName("Ycoordinate")[0].childNodes[0].nodeValue.toString();
		var pointprovince = document.getElementById("pointprovince");		
		pointprovince.innerHTML=XMLDoc.getElementsByTagName("province")[0].childNodes[0].nodeValue.toString();
		var pointdistrict = document.getElementById("pointdistrict");		
		pointdistrict.innerHTML=XMLDoc.getElementsByTagName("district")[0].childNodes[0].nodeValue.toString();
		var pointcommune = document.getElementById("pointcommune");		
		pointcommune.innerHTML=XMLDoc.getElementsByTagName("commune")[0].childNodes[0].nodeValue.toString();
		//var viewchart = document.getElementById("viewchart");		
		//viewchart.innerHTML="Linechart";
		//var id = parseInt(XMLDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue.toString());
		var pointlink = document.getElementById("pointlink");
		pointlink.setAttribute("href","viewpoint.php?id="+id);
		drawChart(id);		
  }
  /*add_point dung de them mot diem co toa do x,y vao vectorLayer */
function add_point(x,y,i,v){		
	//var style =style_blue;
	//var style1 =style_blue;
	//var style2 =style_blue;
	//var style3 =style_blue;
	var s='Id : '+v+"<br/>";
	s=s+"xcoordinate : "+x+"<br/>";
	s=s+"ycoordinate : "+y+"<br/>";
	//s=s+"<a href='showmap.php?id="+v+"' onclick = '"+ +"'>Click here to view detail</a>";
     s=s+"<p id = 'detail' onclick = 'showpoint123("+v+")'>Click here to view detail</p>";
	var point = new OpenLayers.Geometry.Point(x, y);
	/*
	if (i==0)  {
		style.graphicName="star";    // today
	}
	if (i==1)  style.graphicName="circle";  //yesterday;
	if (i==2)  style.graphicName="square";  //before yesterday
	*/
	var feature;
		if (i==0)  {
		style.graphicName="star";
		style.fillColor = "green";
		style.graphicXOffset=-20;	
   style3.pointRadius=5;

		feature = new OpenLayers.Feature.Vector(point,{description:s},style);
		vectorLayer.addFeatures([feature]);
	}
		if (i==1)  {
		style1.graphicName="square";
		style1.fillColor = "blue";
		style1.graphicXOffset=-10;
   style3.pointRadius=5;
		
		 feature = new OpenLayers.Feature.Vector(point,{description:s},style1);
		 vectorLayer1.addFeatures([feature]);
	}
		if (i==2)  {
		style2.graphicName= "triangle";
		style2.fillColor = "red";
		style2.graphicXOffset=10;		
		 
   style3.pointRadius=5;
feature = new OpenLayers.Feature.Vector(point,{description:s},style2);
		 vectorLayer2.addFeatures([feature]);
	}
	if (i==3)  {
		style3.graphicName="circle";
		style3.fillColor = "yellow";
		style3.graphicXOffset=20;	
		style3.strokeWidth = 1;
		style3.pointRadius=5;
		feature = new OpenLayers.Feature.Vector(point,{description:s},style3);
		vectorLayer3.addFeatures([feature]);
	}
		
			
			}

/*init dung de khoi tao ban do tu GeoServer*/
            function init(){				
			document.getElementById("c_text").style.display="none";
			format = 'image/png';
            map = new OpenLayers.Map( 'map',options);
            layer123 = new OpenLayers.Layer.WMS( "Vietnam Map", "http://localhost:8080/geoserver/Bando/wms",
                    {layers: 'Bando:VNM_adm2',
					 STYLES: '',
                     format: format,
                     tiled: false,
                     tilesOrigin : map.maxExtent.left + ',' + map.maxExtent.bottom},
					 {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: true,
                        yx : {'EPSG:4326' : true}
                    } 					
					);
			
			 layer1234 = new OpenLayers.Layer.WMS(
                    "DBSCL:Distrit - Untiled", "http://localhost:8080/geoserver/DBSCL/wms",
                    {
                        LAYERS: 'DBSCL:Distrit',
                        STYLES: '',
                        format: format
                    },
						{
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: true,
                        yx : {'EPSG:4326' : true}
                    } 		
                );
			 layer = new OpenLayers.Layer.WMS(
                    "wetland:Province", "http://webgis.ctu.edu.vn:8080/geoserver/wetland/wms",
                    {
                        LAYERS: 'wetland:Province',
                        STYLES: '',
                        format: format,
                        tiled: true,
                        tilesOrigin : map.maxExtent.left + ',' + map.maxExtent.bottom
                    },
                    {
                        buffer: 0,
                        displayOutsideMaxExtent: true,
                        isBaseLayer: true,
                        yx : {'EPSG:4326' : true}
                    } 
                );
			 var layer333 = new OpenLayers.Layer.Google(
                "Google Physical",
                {type: google.maps.MapTypeId.TERRAIN}			  
				
            );
			    vectorLayer = new OpenLayers.Layer.Vector("Today", {
                style: layer_style,
                renderers: renderer
                });
			   vectorLayer1 = new OpenLayers.Layer.Vector("Yesterday", {
                style: layer_style,
                renderers: renderer
                });
			   vectorLayer2 = new OpenLayers.Layer.Vector("Before yesterday", {
                style: layer_style,
                renderers: renderer
                });
			   vectorLayer3 = new OpenLayers.Layer.Vector("older", {
                style: layer_style,
                renderers: renderer
                });
              //map.addLayer(layer333);
			   map.addLayers([layer,vectorLayer,vectorLayer1,vectorLayer2,vectorLayer3]);
			  
			  /*
			  ve thanh Zoom bar
			  */
			   map.addControl(new OpenLayers.Control.PanZoomBar({ 
                    position: new OpenLayers.Pixel(2, 15)
                }));
				
                map.addControl(new OpenLayers.Control.Navigation());
				map.addControl(new OpenLayers.Control.LayerSwitcher());
                map.addControl(new OpenLayers.Control.MousePosition({prefix: 'coordinates: '}));   				
                map.zoomToExtent(bounds11);
				show(3);
				show(2);
				show(1);				
				//show popup
				var controls = {
      					selector: new OpenLayers.Control.SelectFeature(vectorLayer, { onSelect: createPopup, onUnselect: destroyPopup }),
						selector1: new OpenLayers.Control.SelectFeature(vectorLayer1, { onSelect: createPopup, onUnselect: destroyPopup }),
						selector2: new OpenLayers.Control.SelectFeature(vectorLayer2, { onSelect: createPopup, onUnselect: destroyPopup }),
						selector3: new OpenLayers.Control.SelectFeature(vectorLayer3, { onSelect: createPopup, onUnselect: destroyPopup })
    			};
    			map.addControl(controls['selector']);
				map.addControl(controls['selector1']);
				map.addControl(controls['selector2']);
				map.addControl(controls['selector3']);
    			controls['selector'].activate();   
				controls['selector1'].activate(); 
				controls['selector2'].activate(); 
				controls['selector3'].activate(); 
		
			
				// add_point();
        

}
		
function createPopup(feature) {
      feature.popup = new OpenLayers.Popup.FramedCloud("Information",
          feature.geometry.getBounds().getCenterLonLat(),
          null,
            

    '<div class="markerContent"> '+feature.attributes.description+'</div>',
          null,
          true,
          function() { controls 
    [ 

    'selector'].unselectAll();
}
);      
      map.addPopup(feature.popup);
    }

    function destroyPopup(feature) {
      feature.popup.destroy();
      feature.popup = null;
    }
/*getXMLDoc doc noi dung XML tu mot dia chi */		
function getXMLDoc(url){
	var xmlhttp;
	var xmlDoc;
	if (window.XMLHttpRequest)
  		{// code for IE7+, Firefox, Chrome, Opera, Safari
  			xmlhttp=new XMLHttpRequest();
  		}
	else
  		{// code for IE6, IE5
  			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;	
	return xmlDoc;
}
/*hien thi thong tin cac dia diem tai ngay thu i ke tu ngay hien tai*/
function show(j){
	var xmlDoc=getXMLDoc("response.php?day="+j);
	var points=xmlDoc.getElementsByTagName("point");	
		for (i=0;i<points.length;i++)
  		{   			
  			var x = parseFloat(points[i].getElementsByTagName("xcoordinate")[0].childNodes[0].nodeValue.toString());
  			var y= parseFloat(points[i].getElementsByTagName("ycoordinate")[0].childNodes[0].nodeValue.toString()); 
			var v=points[i].getElementsByTagName("id")[0].childNodes[0].nodeValue.toString();			
			add_point(x,y,j,v);
  			
 		}
		
}

     // Load the Visualization API and the piechart package.
	  var mainid=0;
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
	 

 function makedata(id){
		  var data = new google.visualization.DataTable();
		  data.addColumn('string', 'Data');
          data.addColumn('number', 'Salanity');
		  XMLDoc=getXMLDoc("point.php?id="+id);
		  
		  var point=XMLDoc.getElementsByTagName("data");
		  
		  //window.alert("sometext : "+point.length);
		  	
		for (i=0;i<point.length;i++)
  		{   			
  			var date=point[i].getElementsByTagName('ngay')[0].childNodes[0].nodeValue.toString();
  			var value=parseInt(point[i].getElementsByTagName('value')[0].childNodes[0].nodeValue.toString());
			data.addRow([date,value]);
 		}
		  return data;
	  }
      function drawChart(id) {

        // Create the data table.
        var data = makedata(id);
        
       
        // Set chart options
        var options = {'title':'Point',
                       'width':160,
                       'height':120,
					   vAxis: {title: "Salanity"},
     				   hAxis: {title: "Date",
					   		   gridlines: {color: '#333', count: 4}
							   },
					   pointSize:2,
					   animation:{
        					duration: 1000,
        					easing: 'out'
      					}
	  };
        // Instantiate and draw our chart, passing in some options.
        var chart = new  google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

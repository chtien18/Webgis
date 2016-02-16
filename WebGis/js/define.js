// JavaScript Document
 OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;
  // make OL compute scale according to WMS spec
      //OpenLayers.DOTS_PER_INCH = 50.4 / 0.28;
	  OpenLayers.DOTS_PER_INCH = 50.4 / 0.28;
			var bounds = new OpenLayers.Bounds(
                    137862.57374458457, 936982.1851653424,
                    1004180.7152498991, 2621387.769387889
                );
			
			var bounds11 = new OpenLayers.Bounds(
                    137862.57374458457, 1246909.56730,
                    777399.66631,914445.83141
                );
                var options = {
                    controls: [],					
                    maxExtent: bounds,
                    //maxResolution: 6579.709313369323,
					maxResolution: 6579.709313369323,
                    projection: "EPSG:3405",
                    units: 'm'
                };
/*
var bounds = new OpenLayers.Bounds(
                    103.45820699999996, 8.563332000000026,
                    106.79194699999994, 11.032491000000002
                );
                var options = {
                    controls: [],
                    maxExtent: bounds,
                    maxResolution: 0.0130224218749999,
                    projection: "EPSG:3405",
                    units: 'm'
                };
			/*
             * Layer style
             */
            // we want opaque external graphics and non-opaque internal graphics
            var layer_style = OpenLayers.Util.extend({}, OpenLayers.Feature.Vector.style['default']);
            layer_style.fillOpacity = 0.5;
            layer_style.graphicOpacity = 1;
			/*
			*render
			*/
			var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
            renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
			
			/*
             * Blue style
             */
            var style_blue = OpenLayers.Util.extend({}, layer_style);
            style_blue.strokeColor = "blue";
            style_blue.fillColor = "blue";
            style_blue.graphicName = "triangle"; //"star", "cross", "x", "square", "triangle", and "circle" 
            style_blue.pointRadius = 10;
            //style_blue.strokeWidth = 3;
            style_blue.rotation = 0;
            //style_blue.strokeLinecap = "butt";
			
			var style = OpenLayers.Util.extend({}, layer_style);
            style.strokeColor = "blue";
            style.fillColor = "blue";
            style.graphicName = "triangle"; //"star", "cross", "x", "square", "triangle", and "circle" 
            style.pointRadius = 10;
            //style_blue.strokeWidth = 3;
            style.rotation = 0;
            //style_blue.strokeLinecap = "butt";
			var style1 = OpenLayers.Util.extend({}, layer_style);
            style1.strokeColor = "blue";
            style1.fillColor = "blue";
            style1.graphicName = "triangle"; //"star", "cross", "x", "square", "triangle", and "circle" 
            style1.pointRadius = 10;
            //style_blue.strokeWidth = 3;
            style1.rotation = 0;
            //style_blue.strokeLinecap = "butt";
			
			var style2 = OpenLayers.Util.extend({}, layer_style);
            style2.strokeColor = "blue";
            style2.fillColor = "blue";
            style2.graphicName = "triangle"; //"star", "cross", "x", "square", "triangle", and "circle" 
            style2.pointRadius = 10;
            //style_blue.strokeWidth = 3;
            style2.rotation = 0;
            //style_blue.strokeLinecap = "butt";
			
			var style3 = OpenLayers.Util.extend({}, layer_style);
            style3.strokeColor = "blue";
            style3.fillColor = "blue";
            style3.graphicName = "triangle"; //"star", "cross", "x", "square", "triangle", and "circle" 
            style3.pointRadius = 10;
            //style_blue.strokeWidth = 3;
            style3.rotation = 0;
            //style_blue.strokeLinecap = "butt";

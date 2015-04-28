(function() {
   var mexico = ol.proj.transform([-100.41, 24.82], 'EPSG:4326', 'EPSG:3857');

   var bounds = [
        -118.408, 14.532,
        -86.709, 32.719
   ];

   var wmsSource0 = new ol.source.TileWMS({
      	preload: Infinity,
        url: 'http://geonode.asam.centrogeo.org.mx/geoserver/geonode/wms',
        serverType:'geoserver',
        params:{
            LAYERS:'geonode:cn_total_1', TILED:false, STYLES:'serie1'
        }
   });

   var wmsSource1 = new ol.source.TileWMS({
	preload: Infinity,
        url: 'http://geonode.asam.centrogeo.org.mx/geoserver/geonode/wms',
        serverType:'geoserver',
        params:{
            LAYERS:'geonode:cn_total_1', TILED:false, STYLES:'serie2'
        }
   });

   var wmsSource2 = new ol.source.TileWMS({              
      	preload: Infinity,
        url: 'http://geonode.asam.centrogeo.org.mx/geoserver/geonode/wms',
        serverType:'geoserver',
        params:{
            LAYERS:'geonode:cn_total_1', TILED:false, STYLES:'serie3'
        }
   });

   var wmsSource3 = new ol.source.TileWMS({              
      	preload: Infinity,
        url: 'http://geonode.asam.centrogeo.org.mx/geoserver/geonode/wms',
        serverType:'geoserver',
        params:{
            LAYERS:'geonode:cn_total_1', TILED:false, STYLES:'serie4'
        }
   });

  var wmsSource4 = new ol.source.TileWMS({              
      	preload: Infinity,
        url: 'http://geonode.asam.centrogeo.org.mx/geoserver/geonode/wms',
        serverType:'geoserver',
        params:{
            LAYERS:'geonode:cn_total_1', TILED:false, STYLES:'serie5'
        }
   });

   var BaseLayer = new ol.layer.Tile({
        extent: bounds,
        source: new ol.source.TileWMS({
          url: 'http://demo.opengeo.org/geoserver/wms',
          params: {
            'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
          }
        })
   });
   serie1 = 'http://geonode.asam.centrogeo.org.mx:80/geoserver/wms?request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cn_total&style=serie1'
   var wmsLayer0 = new ol.layer.Tile({
      extent: bounds,
      source: wmsSource0,
      visible: false,
   });

   var wmsLayer1 = new ol.layer.Tile({
      extent: bounds,
      source: wmsSource1,
      visible: false,
   });


   var wmsLayer2 = new ol.layer.Tile({
      extent: bounds,
      source: wmsSource2,
      visible: false,
   });

   var wmsLayer3 = new ol.layer.Tile({
      extent: bounds,
      source: wmsSource3,
      visible: false,
   });

   var wmsLayer4 = new ol.layer.Tile({
      extent: bounds,
      source: wmsSource4,
      visible: false,
   });


    var view = new ol.View({

      projection: "EPSG:4326",
      center: [-100.41, 24.82],
      extent: bounds,
      zoom: 5
    });
    
    var allLayers = [BaseLayer]
    .concat(wmsLayer0)
    .concat(wmsLayer1)
    .concat(wmsLayer2)
    .concat(wmsLayer3)
    .concat(wmsLayer4)

    var wmsLayers = [wmsLayer0]
    .concat(wmsLayer1)
    .concat(wmsLayer2)
    .concat(wmsLayer3)
    .concat(wmsLayer4)
  
    var map = new ol.Map({      
      layers: allLayers,
      renderer: 'canvas',
      target: 'map',
      view: view
    });

    map.on('singleclick', function(evt) {
      document.getElementById('info').innerHTML = '';
      var viewResolution = /** @type {number} */ (view.getResolution());
      var url = wmsSource.getGetFeatureInfoUrl(
          evt.coordinate, viewResolution, 'EPSG:4326',
          {'INFO_FORMAT': 'text/html'});
      if (url) {
        document.getElementById('info').innerHTML =
            '<iframe seamless src="' + url + '" width="680"></iframe>';
      }
    });

	// Enciende la capa sobre la que se da clic
	  $('#radios').click(function(e) {
	    var target = e.target;
	    var layerName = target.getAttribute('data-radio');
	    if (!layerName) {
	      // user clicked in area but not on radio
	      return;
	    }
	    layer = wmsLayers[layerName];
	    if (!layer) {
	      throw new Error('Could not find layer name: ' + layerName);
	    }
	    wmsLayers.forEach(function(Layer) {
	      Layer.setVisible(false);
	    });
	    layer.setVisible(true);
	  });

	  $('#cryo').click(function(e) {
	    cryoLayer.setVisible(this.checked);
	  });

	  // the first layer should be visible on page load
	  wmsLayers[0].setVisible(true);
}());


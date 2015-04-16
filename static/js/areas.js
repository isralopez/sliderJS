(function() {
	// turn on the single layer that is clicked on
	  $('#radios').click(function(e) {
	    var target = e.target;
	    var layerName = target.getAttribute('data-radio');
	    if (!layerName) {
	      // user clicked in area but not on radio
	      return;
	    }
	    var div = document.getElementById('map');
	    if (layerName == 0) {		
            	div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/15/embed" />';        
	    }
	    else if (layerName == 1) {		
            	div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/16/embed" />';        
	    }
	    else if (layerName == 2) {		
            	div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/17/embed" />';        
	    }
	    else if (layerName == 3) {		
            	div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/18/embed" />';        
	    }
	    else {
	        div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/19/embed" />';
	    }
	  });

	  // the first layer should be visible on page load
	  div.innerHTML = '<iframe style="width:100%;height:100%;" frameborder="0" src="http://geonode.asam.centrogeo.org.mx/maps/15/embed" />';
}());


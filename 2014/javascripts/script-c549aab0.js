function googleMaps(){var e=[{stylers:[{hue:"#005eff"},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]}],t=new google.maps.StyledMapType(e,{name:"Styled Map"}),n={center:new google.maps.LatLng(41.178777,-8.60023),zoom:15,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]},scrollwheel:!1},o=new google.maps.Map(document.getElementById("map-canvas"),n),i=new google.maps.Marker({position:new google.maps.LatLng(41.177905,-8.59581),icon:"../images/map_marker-e84e16fe.png"});i.setMap(o),o.mapTypes.set("map_style",t),o.setMapTypeId("map_style")}function countdown(){function e(e,t){var n="000000000"+e;return n.substr(n.length-t)}var t,n,o,i,a=new Date(2014,1,8,9,30).getTime(),r=document.getElementById("day"),s=document.getElementById("hour"),d=document.getElementById("minute"),l=document.getElementById("second");setInterval(function(){var u=(new Date).getTime(),g=(a-u)/1e3;t=parseInt(g/86400),g%=86400,n=parseInt(g/3600),g%=3600,o=parseInt(g/60),i=parseInt(g%60),0>o&&(o=0),0>t&&(t=0),0>n&&(n=0),0==n&&0==t&&0==o&&(i=0),r.innerHTML=e(t,2),s.innerHTML=e(n,2),d.innerHTML=e(o,2),l.innerHTML=e(i,2)},1e3)}document.getElementById("map-canvas")&&google.maps.event.addDomListener(window,"load",googleMaps),document.getElementById("countdown")&&countdown();
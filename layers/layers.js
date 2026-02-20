var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SCL_1 = new ol.format.GeoJSON();
var features_SCL_1 = format_SCL_1.readFeatures(json_SCL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCL_1.addFeatures(features_SCL_1);
var lyr_SCL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCL_1, 
                style: style_SCL_1,
                popuplayertitle: 'SCL',
                interactive: true,
    title: 'SCL<br />\
    <img src="styles/legend/SCL_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/SCL_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/SCL_1_2.png" /> 10+<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_SCL_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SCL_1];
lyr_SCL_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_SCL_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'n': 'Range', 'distance': 'TextEdit', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', });
lyr_SCL_1.set('fieldLabels', {'begin': 'hidden field', 'end': 'hidden field', 'RP': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SCL': 'inline label - always visible', 'n': 'hidden field', 'distance': 'hidden field', 'feature_x': 'hidden field', 'feature_y': 'hidden field', 'nearest_x': 'hidden field', 'nearest_y': 'hidden field', });
lyr_SCL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
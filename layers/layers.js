var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SCLLine_1 = new ol.format.GeoJSON();
var features_SCLLine_1 = format_SCLLine_1.readFeatures(json_SCLLine_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCLLine_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCLLine_1.addFeatures(features_SCLLine_1);
var lyr_SCLLine_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCLLine_1, 
                style: style_SCLLine_1,
                popuplayertitle: 'SCL Line',
                interactive: false,
    title: 'SCL Line<br />\
    <img src="styles/legend/SCLLine_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/SCLLine_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/SCLLine_1_2.png" /> 10+<br />' });
var format_Red_2 = new ol.format.GeoJSON();
var features_Red_2 = format_Red_2.readFeatures(json_Red_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_2.addFeatures(features_Red_2);
var lyr_Red_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_2, 
                style: style_Red_2,
                popuplayertitle: 'Red',
                interactive: true,
                title: '<img src="styles/legend/Red_2.png" /> Red'
            });
var format_Orange_3 = new ol.format.GeoJSON();
var features_Orange_3 = format_Orange_3.readFeatures(json_Orange_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orange_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orange_3.addFeatures(features_Orange_3);
var lyr_Orange_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orange_3, 
                style: style_Orange_3,
                popuplayertitle: 'Orange',
                interactive: true,
                title: '<img src="styles/legend/Orange_3.png" /> Orange'
            });
var format_Green_4 = new ol.format.GeoJSON();
var features_Green_4 = format_Green_4.readFeatures(json_Green_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Green_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Green_4.addFeatures(features_Green_4);
var lyr_Green_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Green_4, 
                style: style_Green_4,
                popuplayertitle: 'Green',
                interactive: true,
                title: '<img src="styles/legend/Green_4.png" /> Green'
            });
var group_SCLPoints = new ol.layer.Group({
                                layers: [lyr_Red_2,lyr_Orange_3,lyr_Green_4,],
                                fold: 'open',
                                title: 'SCL Points'});

lyr_OpenStreetMap_0.setVisible(true);lyr_SCLLine_1.setVisible(true);lyr_Red_2.setVisible(false);lyr_Orange_3.setVisible(false);lyr_Green_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_SCLLine_1,group_SCLPoints];
lyr_SCLLine_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_Red_2.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_Orange_3.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_Green_4.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_SCLLine_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'n': 'Range', 'distance': 'TextEdit', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', });
lyr_Red_2.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_Orange_3.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_Green_4.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_SCLLine_1.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'RP': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SCL': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', });
lyr_Red_2.set('fieldLabels', {'fid': 'hidden field', 'RP': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Orange_3.set('fieldLabels', {'fid': 'hidden field', 'RP': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Green_4.set('fieldLabels', {'fid': 'header label - always visible', 'RP': 'inline label - visible with data', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Green_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_SNeffSNreq1_1 = new ol.format.GeoJSON();
var features_SNeffSNreq1_1 = format_SNeffSNreq1_1.readFeatures(json_SNeffSNreq1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNeffSNreq1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNeffSNreq1_1.addFeatures(features_SNeffSNreq1_1);
var lyr_SNeffSNreq1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SNeffSNreq1_1, 
                style: style_SNeffSNreq1_1,
                popuplayertitle: 'SNeff/SNreq > 1',
                interactive: false,
                title: '<img src="styles/legend/SNeffSNreq1_1.png" /> SNeff/SNreq > 1'
            });
var format_SCLLine_2 = new ol.format.GeoJSON();
var features_SCLLine_2 = format_SCLLine_2.readFeatures(json_SCLLine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCLLine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCLLine_2.addFeatures(features_SCLLine_2);
var lyr_SCLLine_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCLLine_2, 
                style: style_SCLLine_2,
                popuplayertitle: 'SCL Line',
                interactive: false,
    title: 'SCL Line<br />\
    <img src="styles/legend/SCLLine_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/SCLLine_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/SCLLine_2_2.png" /> 10+<br />' });
var format_Green_3 = new ol.format.GeoJSON();
var features_Green_3 = format_Green_3.readFeatures(json_Green_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Green_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Green_3.addFeatures(features_Green_3);
var lyr_Green_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Green_3, 
                style: style_Green_3,
                popuplayertitle: 'Green',
                interactive: true,
                title: '<img src="styles/legend/Green_3.png" /> Green'
            });
var format_Orange_4 = new ol.format.GeoJSON();
var features_Orange_4 = format_Orange_4.readFeatures(json_Orange_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orange_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orange_4.addFeatures(features_Orange_4);
var lyr_Orange_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orange_4, 
                style: style_Orange_4,
                popuplayertitle: 'Orange',
                interactive: true,
                title: '<img src="styles/legend/Orange_4.png" /> Orange'
            });
var format_Red_5 = new ol.format.GeoJSON();
var features_Red_5 = format_Red_5.readFeatures(json_Red_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_5.addFeatures(features_Red_5);
var lyr_Red_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_5, 
                style: style_Red_5,
                popuplayertitle: 'Red',
                interactive: true,
                title: '<img src="styles/legend/Red_5.png" /> Red'
            });
var group_SCLPoints = new ol.layer.Group({
                                layers: [lyr_Green_3,lyr_Orange_4,lyr_Red_5,],
                                fold: 'open',
                                title: 'SCL Points'});

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_SNeffSNreq1_1.setVisible(false);lyr_SCLLine_2.setVisible(false);lyr_Green_3.setVisible(false);lyr_Orange_4.setVisible(true);lyr_Red_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_SNeffSNreq1_1,lyr_SCLLine_2,group_SCLPoints];
lyr_SNeffSNreq1_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SNR': 'SNR', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_SCLLine_2.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_Green_3.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_Orange_4.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_Red_5.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SCL': 'SCL', 'SCL Class': 'SCL Class', });
lyr_SNeffSNreq1_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SNR': 'CheckBox', 'n': 'Range', 'distance': 'TextEdit', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', });
lyr_SCLLine_2.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'n': 'Range', 'distance': 'TextEdit', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', });
lyr_Green_3.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_Orange_4.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_Red_5.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SCL': 'TextEdit', 'SCL Class': 'TextEdit', });
lyr_SNeffSNreq1_1.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'RP': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SNR': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', });
lyr_SCLLine_2.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', 'RP': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SCL': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', });
lyr_Green_3.set('fieldLabels', {'fid': 'header label - always visible', 'RP': 'inline label - visible with data', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Orange_4.set('fieldLabels', {'fid': 'hidden field', 'RP': 'inline label - visible with data', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Red_5.set('fieldLabels', {'fid': 'hidden field', 'RP': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'SCL': 'inline label - always visible', 'SCL Class': 'hidden field', });
lyr_Red_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
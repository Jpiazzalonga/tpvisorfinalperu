ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5387").setExtent([-313279.254557, 7949664.494398, 2120923.040811, 9798032.249133]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Densidadhkm2_1 = new ol.format.GeoJSON();
var features_Densidadhkm2_1 = format_Densidadhkm2_1.readFeatures(json_Densidadhkm2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Densidadhkm2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidadhkm2_1.addFeatures(features_Densidadhkm2_1);
var lyr_Densidadhkm2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densidadhkm2_1, 
                style: style_Densidadhkm2_1,
                popuplayertitle: "Densidad h/km2",
                interactive: true,
    title: 'Densidad h/km2<br />\
    <img src="styles/legend/Densidadhkm2_1_0.png" /> 1,7 - 11<br />\
    <img src="styles/legend/Densidadhkm2_1_1.png" /> 11,1 - 17<br />\
    <img src="styles/legend/Densidadhkm2_1_2.png" /> 17,1 - 24<br />\
    <img src="styles/legend/Densidadhkm2_1_3.png" /> 24,1 -50<br />\
    <img src="styles/legend/Densidadhkm2_1_4.png" /> 50,1 - 7086,2<br />'
        });
var format_Rios_2 = new ol.format.GeoJSON();
var features_Rios_2 = format_Rios_2.readFeatures(json_Rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_2.addFeatures(features_Rios_2);
var lyr_Rios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_2, 
                style: style_Rios_2,
                popuplayertitle: "Rios",
                interactive: true,
                title: '<img src="styles/legend/Rios_2.png" /> Rios'
            });
var format_Ferrocarril_3 = new ol.format.GeoJSON();
var features_Ferrocarril_3 = format_Ferrocarril_3.readFeatures(json_Ferrocarril_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Ferrocarril_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_3.addFeatures(features_Ferrocarril_3);
var lyr_Ferrocarril_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarril_3, 
                style: style_Ferrocarril_3,
                popuplayertitle: "Ferrocarril",
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_3.png" /> Ferrocarril'
            });
var format_Rutas_4 = new ol.format.GeoJSON();
var features_Rutas_4 = format_Rutas_4.readFeatures(json_Rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_4.addFeatures(features_Rutas_4);
var lyr_Rutas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_4, 
                style: style_Rutas_4,
                popuplayertitle: "Rutas ",
                interactive: true,
    title: 'Rutas <br />\
    <img src="styles/legend/Rutas_4_0.png" /> Pavimentado <br />\
    <img src="styles/legend/Rutas_4_1.png" /> Sin pavimentar<br />\
    <img src="styles/legend/Rutas_4_2.png" /> Proyectado<br />\
    <img src="styles/legend/Rutas_4_3.png" /> Pavimentado básico<br />'
        });
var format_capital_5 = new ol.format.GeoJSON();
var features_capital_5 = format_capital_5.readFeatures(json_capital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_capital_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_5.addFeatures(features_capital_5);
var lyr_capital_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capital_5, 
                style: style_capital_5,
                popuplayertitle: "capital",
                interactive: true,
                title: '<img src="styles/legend/capital_5.png" /> capital'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Densidadhkm2_1.setVisible(true);lyr_Rios_2.setVisible(true);lyr_Ferrocarril_3.setVisible(true);lyr_Rutas_4.setVisible(true);lyr_capital_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Densidadhkm2_1,lyr_Rios_2,lyr_Ferrocarril_3,lyr_Rutas_4,lyr_capital_5];
lyr_Densidadhkm2_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'densidad': 'densidad', 'área km2': 'área km2', 'habitantes': 'habitantes', });
lyr_Rios_2.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_Ferrocarril_3.set('fieldAliases', {'TRAMO': 'TRAMO', 'Long km': 'Long km', 'Nombre': 'Nombre', });
lyr_Rutas_4.set('fieldAliases', {'cNomRuta': 'cNomRuta', 'dSuperfi24': 'dSuperfi24', });
lyr_capital_5.set('fieldAliases', {'Habitantes': 'Habitantes', });
lyr_Densidadhkm2_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'densidad': 'TextEdit', 'área km2': 'TextEdit', 'habitantes': 'TextEdit', });
lyr_Rios_2.set('fieldImages', {'Nombre': '', });
lyr_Ferrocarril_3.set('fieldImages', {'TRAMO': 'TextEdit', 'Long km': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Rutas_4.set('fieldImages', {'cNomRuta': 'TextEdit', 'dSuperfi24': 'TextEdit', });
lyr_capital_5.set('fieldImages', {'Habitantes': '', });
lyr_Densidadhkm2_1.set('fieldLabels', {'DEPARTAMEN': 'inline label - visible with data', 'CAPITAL': 'inline label - visible with data', 'densidad': 'inline label - visible with data', 'área km2': 'hidden field', 'habitantes': 'hidden field', });
lyr_Rios_2.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_Ferrocarril_3.set('fieldLabels', {'TRAMO': 'inline label - visible with data', 'Long km': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_Rutas_4.set('fieldLabels', {'cNomRuta': 'inline label - visible with data', 'dSuperfi24': 'no label', });
lyr_capital_5.set('fieldLabels', {'Habitantes': 'inline label - visible with data', });
lyr_capital_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
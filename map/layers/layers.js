var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SLOPE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_2_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_2_1.png" /> 20.3847<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8405957.357786, 1318066.880243, 8410367.345784, 1323074.363667]
        })
    });
var lyr_RELIEF_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RELIEF<br />\
    <img src="styles/legend/RELIEF_3_0.png" /> <= 15<br />\
    <img src="styles/legend/RELIEF_3_1.png" /> 15 - 29<br />\
    <img src="styles/legend/RELIEF_3_2.png" /> 29 - 43<br />\
    <img src="styles/legend/RELIEF_3_3.png" /> 43 - 57<br />\
    <img src="styles/legend/RELIEF_3_4.png" /> 57 - 71<br />\
    <img src="styles/legend/RELIEF_3_5.png" /> > 71<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RELIEF_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8405966.665410, 1318075.295212, 8410357.600880, 1323066.079155]
        })
    });
var lyr_HILLSHADE_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILL SHADE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8405966.665410, 1318075.295212, 8410357.600880, 1323066.079155]
        })
    });
var lyr_DEM_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_5_0.png" /> 1<br />\
    <img src="styles/legend/DEM_5_1.png" /> 85<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8405966.665410, 1318075.295212, 8410357.600880, 1323066.079155]
        })
    });
var format_GEOMORPHOLOGY_6 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_6 = format_GEOMORPHOLOGY_6.readFeatures(json_GEOMORPHOLOGY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_6.addFeatures(features_GEOMORPHOLOGY_6);
var lyr_GEOMORPHOLOGY_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_6, 
                style: style_GEOMORPHOLOGY_6,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_1.png" /> Residual Mount<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_2.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_3.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_6_4.png" /> <br />' });
var format_SOILTEXTURE_7 = new ol.format.GeoJSON();
var features_SOILTEXTURE_7 = format_SOILTEXTURE_7.readFeatures(json_SOILTEXTURE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOILTEXTURE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOILTEXTURE_7.addFeatures(features_SOILTEXTURE_7);
var lyr_SOILTEXTURE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOILTEXTURE_7, 
                style: style_SOILTEXTURE_7,
                popuplayertitle: 'SOIL TEXTURE',
                interactive: true,
    title: 'SOIL TEXTURE<br />\
    <img src="styles/legend/SOILTEXTURE_7_0.png" /> clay<br />\
    <img src="styles/legend/SOILTEXTURE_7_1.png" /> gravelly clay<br />\
    <img src="styles/legend/SOILTEXTURE_7_2.png" /> Mahe<br />\
    <img src="styles/legend/SOILTEXTURE_7_3.png" /> <br />' });
var format_GEOLOGY_8 = new ol.format.GeoJSON();
var features_GEOLOGY_8 = format_GEOLOGY_8.readFeatures(json_GEOLOGY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_8.addFeatures(features_GEOLOGY_8);
var lyr_GEOLOGY_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_8, 
                style: style_GEOLOGY_8,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_8_0.png" /> Low grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_8_1.png" /> Migmatite Complex<br />\
    <img src="styles/legend/GEOLOGY_8_2.png" /> <br />' });
var lyr_OLDTOPOSHEET_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OLD TOPOSHEET<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OLDTOPOSHEET_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8405941.836953, 1318047.527920, 8410369.591006, 1323098.476930]
        })
    });
var format_KADIRURBOUNDARY_10 = new ol.format.GeoJSON();
var features_KADIRURBOUNDARY_10 = format_KADIRURBOUNDARY_10.readFeatures(json_KADIRURBOUNDARY_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KADIRURBOUNDARY_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KADIRURBOUNDARY_10.addFeatures(features_KADIRURBOUNDARY_10);
var lyr_KADIRURBOUNDARY_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KADIRURBOUNDARY_10, 
                style: style_KADIRURBOUNDARY_10,
                popuplayertitle: 'KADIRUR BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/KADIRURBOUNDARY_10.png" /> KADIRUR BOUNDARY'
            });
var format_BUILTUP_11 = new ol.format.GeoJSON();
var features_BUILTUP_11 = format_BUILTUP_11.readFeatures(json_BUILTUP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILTUP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILTUP_11.addFeatures(features_BUILTUP_11);
var lyr_BUILTUP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILTUP_11, 
                style: style_BUILTUP_11,
                popuplayertitle: 'BUILT UP',
                interactive: true,
                title: '<img src="styles/legend/BUILTUP_11.png" /> BUILT UP'
            });
var format_TOWERLINE_12 = new ol.format.GeoJSON();
var features_TOWERLINE_12 = format_TOWERLINE_12.readFeatures(json_TOWERLINE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOWERLINE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOWERLINE_12.addFeatures(features_TOWERLINE_12);
var lyr_TOWERLINE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOWERLINE_12, 
                style: style_TOWERLINE_12,
                popuplayertitle: 'TOWER LINE',
                interactive: true,
                title: '<img src="styles/legend/TOWERLINE_12.png" /> TOWER LINE'
            });
var format_DRAINAGE_13 = new ol.format.GeoJSON();
var features_DRAINAGE_13 = format_DRAINAGE_13.readFeatures(json_DRAINAGE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_13.addFeatures(features_DRAINAGE_13);
var lyr_DRAINAGE_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_13, 
                style: style_DRAINAGE_13,
                popuplayertitle: 'DRAINAGE',
                interactive: true,
                title: '<img src="styles/legend/DRAINAGE_13.png" /> DRAINAGE'
            });
var format_KSEBTOWER_14 = new ol.format.GeoJSON();
var features_KSEBTOWER_14 = format_KSEBTOWER_14.readFeatures(json_KSEBTOWER_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSEBTOWER_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSEBTOWER_14.addFeatures(features_KSEBTOWER_14);
var lyr_KSEBTOWER_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSEBTOWER_14, 
                style: style_KSEBTOWER_14,
                popuplayertitle: 'KSEB TOWER',
                interactive: true,
                title: '<img src="styles/legend/KSEBTOWER_14.png" /> KSEB TOWER'
            });
var format_SCHOOL_15 = new ol.format.GeoJSON();
var features_SCHOOL_15 = format_SCHOOL_15.readFeatures(json_SCHOOL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_15.addFeatures(features_SCHOOL_15);
var lyr_SCHOOL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCHOOL_15, 
                style: style_SCHOOL_15,
                popuplayertitle: 'SCHOOL',
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_15.png" /> SCHOOL'
            });
var format_ROAD_16 = new ol.format.GeoJSON();
var features_ROAD_16 = format_ROAD_16.readFeatures(json_ROAD_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_16.addFeatures(features_ROAD_16);
var lyr_ROAD_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_16, 
                style: style_ROAD_16,
                popuplayertitle: 'ROAD',
                interactive: true,
                title: '<img src="styles/legend/ROAD_16.png" /> ROAD'
            });
var format_KADIRURWARD_17 = new ol.format.GeoJSON();
var features_KADIRURWARD_17 = format_KADIRURWARD_17.readFeatures(json_KADIRURWARD_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KADIRURWARD_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KADIRURWARD_17.addFeatures(features_KADIRURWARD_17);
var lyr_KADIRURWARD_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KADIRURWARD_17, 
                style: style_KADIRURWARD_17,
                popuplayertitle: 'KADIRUR WARD',
                interactive: true,
    title: 'KADIRUR WARD<br />\
    <img src="styles/legend/KADIRURWARD_17_0.png" /> 4TH-MILE<br />\
    <img src="styles/legend/KADIRURWARD_17_1.png" /> CHUNDANGAPOYIL<br />\
    <img src="styles/legend/KADIRURWARD_17_2.png" /> KADIRUR TEMPLE<br />\
    <img src="styles/legend/KADIRURWARD_17_3.png" /> KADIRUR THERU<br />\
    <img src="styles/legend/KADIRURWARD_17_4.png" /> KAKKARA<br />\
    <img src="styles/legend/KADIRURWARD_17_5.png" /> KATHIRUR TOWN<br />\
    <img src="styles/legend/KADIRURWARD_17_6.png" /> KUNDUCHIRA<br />\
    <img src="styles/legend/KADIRURWARD_17_7.png" /> KUTTYERICHAL<br />\
    <img src="styles/legend/KADIRURWARD_17_8.png" /> PARAMKUNNU<br />\
    <img src="styles/legend/KADIRURWARD_17_9.png" /> PONNYAM PALAM<br />\
    <img src="styles/legend/KADIRURWARD_17_10.png" /> PONNYAM SOUTH<br />\
    <img src="styles/legend/KADIRURWARD_17_11.png" /> PONNYAM SRAMBI<br />\
    <img src="styles/legend/KADIRURWARD_17_12.png" /> PULLIYOD EAST<br />\
    <img src="styles/legend/KADIRURWARD_17_13.png" /> PULLIYOD WEST<br />\
    <img src="styles/legend/KADIRURWARD_17_14.png" /> PULLIYODU CH NAGAR<br />\
    <img src="styles/legend/KADIRURWARD_17_15.png" /> PULLODI<br />\
    <img src="styles/legend/KADIRURWARD_17_16.png" /> PULLYODU<br />\
    <img src="styles/legend/KADIRURWARD_17_17.png" /> UKKAS MOTTA<br />\
    <img src="styles/legend/KADIRURWARD_17_18.png" /> VANNARVAYAL<br />\
    <img src="styles/legend/KADIRURWARD_17_19.png" /> VETTUMMAL<br />\
    <img src="styles/legend/KADIRURWARD_17_20.png" /> <br />' });
lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SLOPE_2.setVisible(true);lyr_RELIEF_3.setVisible(true);lyr_HILLSHADE_4.setVisible(true);lyr_DEM_5.setVisible(true);lyr_GEOMORPHOLOGY_6.setVisible(true);lyr_SOILTEXTURE_7.setVisible(true);lyr_GEOLOGY_8.setVisible(true);lyr_OLDTOPOSHEET_9.setVisible(true);lyr_KADIRURBOUNDARY_10.setVisible(true);lyr_BUILTUP_11.setVisible(true);lyr_TOWERLINE_12.setVisible(true);lyr_DRAINAGE_13.setVisible(true);lyr_KSEBTOWER_14.setVisible(true);lyr_SCHOOL_15.setVisible(true);lyr_ROAD_16.setVisible(true);lyr_KADIRURWARD_17.setVisible(true);

var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_SLOPE_2,lyr_RELIEF_3,lyr_HILLSHADE_4,lyr_DEM_5,lyr_GEOMORPHOLOGY_6,lyr_SOILTEXTURE_7,lyr_GEOLOGY_8,lyr_OLDTOPOSHEET_9,lyr_KADIRURBOUNDARY_10,lyr_BUILTUP_11,lyr_TOWERLINE_12,lyr_DRAINAGE_13,lyr_KSEBTOWER_14,lyr_SCHOOL_15,lyr_ROAD_16,lyr_KADIRURWARD_17];
lyr_GEOMORPHOLOGY_6.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_SOILTEXTURE_7.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_GEOLOGY_8.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_KADIRURBOUNDARY_10.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_BUILTUP_11.set('fieldAliases', {'source': 'source', 'height': 'height', 'bbox.xmax': 'bbox.xmax', 'bbox.xmin': 'bbox.xmin', 'bbox.ymax': 'bbox.ymax', 'bbox.ymin': 'bbox.ymin', });
lyr_TOWERLINE_12.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_DRAINAGE_13.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', 'layer': 'layer', 'path': 'path', });
lyr_KSEBTOWER_14.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_SCHOOL_15.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'schoolname': 'schoolname', 'district': 'district', });
lyr_ROAD_16.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_KADIRURWARD_17.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORPHOLOGY_6.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_SOILTEXTURE_7.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'KERSOIL_': '', 'KERSOIL_ID': '', 'CODE': '', 'MAP_SYMBOL': '', 'DEPTH': '', 'TEXTURE': '', 'SLOPE': '', 'DRAINAGE': '', });
lyr_GEOLOGY_8.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_KADIRURBOUNDARY_10.set('fieldImages', {'id': '', 'NAME': '', });
lyr_BUILTUP_11.set('fieldImages', {'source': '', 'height': '', 'bbox.xmax': '', 'bbox.xmin': '', 'bbox.ymax': '', 'bbox.ymin': '', });
lyr_TOWERLINE_12.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_DRAINAGE_13.set('fieldImages', {'id': '', 'osm_id': '', 'osm_way_id': '', 'name': '', 'type': '', 'aeroway': '', 'amenity': '', 'admin_leve': '', 'barrier': '', 'boundary': '', 'building': '', 'craft': '', 'geological': '', 'historic': '', 'land_area': '', 'landuse': '', 'leisure': '', 'man_made': '', 'military': '', 'natural': '', 'office': '', 'place': '', 'shop': '', 'sport': '', 'tourism': '', 'other_tags': '', 'layer': '', 'path': '', });
lyr_KSEBTOWER_14.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_SCHOOL_15.set('fieldImages', {'fid': '', 'osm_id': '', 'schoolname': '', 'district': '', });
lyr_ROAD_16.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_KADIRURWARD_17.set('fieldImages', {'gml_parent': '', 'gml_pare_1': '', 'gml_id': '', 'geom': '', 'District': '', 'LSGD': '', 'Ward_Name': '', 'Ward_No': '', 'Lsgd_Type': '', 'Created_Da': '', 'Surveyor': '', 'Mob_No': '', 'Remarks': '', '_distLsgd': '', 'OBJECTID': '', '_result': '', '_ulid': '', '_distLsgd2': '', });
lyr_GEOMORPHOLOGY_6.set('fieldLabels', {'NAME': 'inline label - visible with data', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_SOILTEXTURE_7.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'inline label - visible with data', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_GEOLOGY_8.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'inline label - visible with data', });
lyr_KADIRURBOUNDARY_10.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_BUILTUP_11.set('fieldLabels', {'source': 'no label', 'height': 'no label', 'bbox.xmax': 'no label', 'bbox.xmin': 'no label', 'bbox.ymax': 'no label', 'bbox.ymin': 'no label', });
lyr_TOWERLINE_12.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_DRAINAGE_13.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_KSEBTOWER_14.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_SCHOOL_15.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'schoolname': 'inline label - visible with data', 'district': 'no label', });
lyr_ROAD_16.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - visible with data', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_KADIRURWARD_17.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_KADIRURWARD_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
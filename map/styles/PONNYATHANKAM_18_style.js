var size = 0;
var placement = 'point';

var style_PONNYATHANKAM_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var geom = feature.getGeometry();
    var geomType = geom ? geom.getType() : 'Point';
    var name = feature.get("name") || "";
    var isAnkathattu = (feature.get("id") === 1);
    
    var labelText = ""; 
    var labelFont = "bold 11px 'Segoe UI', Roboto, sans-serif";
    var labelFill = "#8B0000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3;
    var textAlign = 'left';
    var offsetX = 12;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';

    // Show label at reasonable zoom levels (resolution < 15)
    if (resolution < 15 && name !== "") {
        labelText = name;
    }

    if (geomType === 'Polygon' || geomType === 'MultiPolygon') {
        return [ new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(178, 34, 34, 0.95)',
                lineDash: [6, 4],
                lineCap: 'round',
                lineJoin: 'round',
                width: 2.5
            }),
            fill: new ol.style.Fill({
                color: 'rgba(235, 87, 87, 0.25)'
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, 'point', bufferColor,
                                  bufferWidth, 'center', 0, 0, overflow, repeat)
        })];
    }

    // Point styling: Premium crimson & gold marker
    var pointRadius = isAnkathattu ? 7.5 : 5.5;
    var fillColor = isAnkathattu ? 'rgba(214, 40, 40, 1.0)' : 'rgba(220, 53, 69, 0.95)';
    var strokeColor = isAnkathattu ? 'rgba(255, 215, 0, 1.0)' : 'rgba(255, 255, 255, 1.0)';
    var strokeWidth = isAnkathattu ? 3.0 : 2.0;

    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: pointRadius + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
                color: strokeColor,
                lineDash: null,
                lineCap: 'round',
                lineJoin: 'round',
                width: strokeWidth
            }),
            fill: new ol.style.Fill({
                color: fillColor
            })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
};

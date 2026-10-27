var size = 0;
var placement = 'line';

var style_PONNYATHANKAM_ROUTE_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var name = feature.get("name") || "";
    var labelFont = "bold 11px 'Segoe UI', Roboto, sans-serif";
    var labelFill = "#7a1c1c";
    var bufferColor = "#ffffff";
    var bufferWidth = 3;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = true;
    var repeat = 400;
    var placement = 'line';

    if (resolution < 50 && name !== "") {
        labelText = name;
    }

    return [
        // Outer glow/casing
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(255, 215, 0, 0.65)',
                lineDash: null,
                lineCap: 'round',
                lineJoin: 'round',
                width: 6.0
            })
        }),
        // Inner dashed route line
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(180, 25, 45, 0.95)',
                lineDash: [10, 6],
                lineCap: 'round',
                lineJoin: 'round',
                width: 3.2
            }),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
        })
    ];
};

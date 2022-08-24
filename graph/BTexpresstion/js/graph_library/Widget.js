/*
 * Initialization of SVG elements for the other widgets to draw on
 * TODO: Think of a better use for this file
 */

var mainSvg = d3
  .select("#viz")
  .append("svg")
  .attr("width", MAIN_SVG_WIDTH)
  .attr("height", MAIN_SVG_HEIGHT);

// Currently pseudocodeSvg is not used; pseudocodes are handled by front end

var markerSvg = mainSvg.append("g").attr("id", "marker");

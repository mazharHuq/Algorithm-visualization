/// data extraction from the editor
function getGrid(value) {
  value = value.replaceAll(" ", ",");
  var newValue = "";
  for (var i = 0; i < value.length; i++) {
    if (i == 0 && value[i] == ",") continue;
    if (value[i - 1] == "," && value[i] == ",") continue;
    newValue += value[i];
  }
  if (newValue.length && newValue[newValue.length - 1] == ",") {
    newValue = newValue.substring(0, newValue.length - 1);
  }
  var valueType = newValue.split(/\r?\n/);
  extactedData = valueType;

  let gridData = {};

  for (let i = 0; i < extactedData.length; i++) {
    if (extactedData[i].length == 0) continue;
    extactedData[i] = extactedData[i].replaceAll(",", " ");
    extactedData[i] = extactedData[i].trim();
    let row = extactedData[i].split(" ");
    dbg(row);
    gridData[row[0]] = [];
    let lim = row.length > 2 ? 2 : row.length;
    for (let j = 0; j < lim; j++) {
      gridData[row[j]] = [];
    }
  }

  let map = [];
  for (let i = 0; i < extactedData.length; i++) {
    if (extactedData[i].length == 0) continue;
    let row = extactedData[i].split(" ");
    if (row.length == 0) continue;
    if (row.length === 1) continue;
    else if (row.length === 2) {
      let key = [row[0], row[1]];
      if (map[key] == undefined) {
        map[key] = 1;
        gridData[row[0]].push([row[1], 0]);
      } else {
        for (let j = 0; j < gridData[row[0]].length; j++) {
          if (gridData[row[0]][j][0] == row[1]) {
            //gridData[row[0]][j][1] = 0;
          }
        }
      }
      //gridData[row[0]].push([row[1], 0]);
    } else {
      let key = [row[0], row[1]];
      if (map[key] == undefined) {
        map[key] = 1;
        gridData[row[0]].push([row[1], row[2]]);
      } else {
        for (let j = 0; j < gridData[row[0]].length; j++) {
          if (gridData[row[0]][j][0] == row[1]) {
            gridData[row[0]][j][1] = row[2];
          }
        }
      }
      //gridData[row[0]].push([row[1], row[2]]);
    }
  }
  return gridData;
}

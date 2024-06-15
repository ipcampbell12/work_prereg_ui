function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0");
}


function getSsSheet(name) {
  var spreadsheet = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1_Z5LgW3RA_gWWzL8DFBTgdNyJU3fPHo8y1q0cL3lqDQ/edit#gid=0",
  );
  var sheet = spreadsheet.getSheetByName(name);
  return sheet;
}

function getSheetDataRange(name, row, col, numCols) {
  const sheet = getSsSheet(name);
  const range = sheet.getRange(row, col, sheet.getLastRow(), numCols);
  return range;
}

function getAllValues(name, row, col, numCols) {
  const range = getSheetDataRange(name, row, col, numCols);
  return range.getValues();
}

function serverSideGetData(name, row, col, numCols) {
  Logger.log("Sheet name: ", name)
  const sheetData = getAllValues(name, row, col, numCols);
  const data = sheetData.filter((row) => row[0] !== "");
  const dataNew = JSON.stringify(data);
  Logger.log("The data is: ", dataNew)
  return dataNew;
}

function serverSideUpdateRow(id, data) {
  Logger.log(data);
  const sheet = getSsSheet("Pre Registrations");
  const row = id + 1;
  const timeStamp = Utilities.formatDate(
    new Date(),
    "PST",
    "MM/dd/yyyy  'at' HH:mm aaa",
  );
  Logger.log(timeStamp);
  const range = sheet.getRange(row, 1, 1, 10);
  const dataArr = [...data, timeStamp];
  range.setValues([dataArr]);
  return dataArr;
}

function serverSideGetSiblings(parent) {
  const sheet = getSsSheet("Pre Registrations");
  const range = sheet.getRange(2, 1, sheet.getLastRow(), 14);
  Logger.log("Parent is:", parent);
  const siblings = range
    .getValues()
    .filter((row) => row[6] === parent)
    .filter((row) => row[0] !== "");

  //need to stringify
  const stringSiblings = JSON.stringify(siblings)
  Logger.log("Siblings are:", stringSiblings);
  return stringSiblings;
}

function createId() {
  const dataLength = getAllValues().length;
  Logger.log("The data length is: ", dataLength);
  const id = dataLength + 1;
  return id;
}

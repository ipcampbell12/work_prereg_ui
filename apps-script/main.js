function doGet() {
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}


function getSsSheet(name) {
    var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1_Z5LgW3RA_gWWzL8DFBTgdNyJU3fPHo8y1q0cL3lqDQ/edit#gid=0")
    var sheet = spreadsheet.getSheetByName(name);
    return sheet;
}

function getSheetDataRange(name) {
    const sheet = getSsSheet(name);
    const range = sheet.getRange(2, 1, sheet.getLastRow(), 10);
    return range;
}

function getAllValues(name) {
    const range = getSheetDataRange(name)
    return range.getValues();
}

function serverSideGetData() {
    const sheetData = getAllValues("PRe Registrations");
    const data = sheetData.filter(row => row[0] !== '')
    const dataNew = JSON.stringify(data)
    return dataNew;
}

function serverSideUpdateRow(id, data) {
    Logger.log(data)
    const sheet = getSheet();
    const row = id + 1;
    const timeStamp = Utilities.formatDate(new Date(), "PST", "MM/dd/yyyy  'at' HH:mm aaa");
    Logger.log(timeStamp)
    const range = sheet.getRange(row, 1, 1, 10);
    const dataArr = [...data, timeStamp]
    range.setValues([dataArr]);
    return dataArr;
}

function tryIt() {
    const dataRow = [6.0, "Potter", "Harry", "Sat Feb 25 03:00:00 GMT-05:00 2012", "6th", "Hogwards School", "Lilly Potter", "555-678-9012", "scheduled"];
    const row = 5;
    serverSideUpdateRow(row, dataRow)
}


function createId() {
    const dataLength = getAllValues().length;
    Logger.log("The data length is: ", dataLength);
    const id = dataLength + 1;
    return id;
}
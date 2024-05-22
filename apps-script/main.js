function doGet() {
    return HtmlService
        .createTemplateFromFile("index")
        .evaluate()
        .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
}


function getSheet() {
    var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1_Z5LgW3RA_gWWzL8DFBTgdNyJU3fPHo8y1q0cL3lqDQ/edit#gid=0")
    var sheet = spreadsheet.getActiveSheet();
    return sheet;
}

function serverSideGetData() {
    const sheet = getSheet();
    const range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());
    const data = range.getValues().filter(row => row[0] !== '')
    const dataNew = JSON.stringify(data)
    Logger.log(dataNew)
    return dataNew;
}
export function clientSideGetData(sheet, row, col, numCols, displayFunc) {
  google.script.run
    .withSuccessHandler(displayFunc)
    .serverSideGetData(sheet, row, col, numCols);
}

export function clientSideGetSiblings(parent, displayFunc) {
  console.log("Client side get siblings: ", parent);
  google.script.run
    .withSuccessHandler(displayFunc)
    .serverSideGetSiblings(parent);
}


export function clientSideSaveData(row, data) {
  console.log("Client side get siblings: ", parent);
  google.script.run
    .serverSideUpdateRow(row, data)
}

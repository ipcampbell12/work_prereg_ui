export async function clientSideGetData(sheet, row, col, numCols, displayFunc) {
    try {
        //console.log("Attempting to fetch data from google sheet")
        await google.script.run
            .withSuccessHandler(displayFunc)
            .serverSideGetData(sheet, row, col, numCols);

    } catch (error) {
        console.error("Error fetching data: ", error)
    }
}





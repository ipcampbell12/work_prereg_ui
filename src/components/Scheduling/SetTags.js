import Form from 'react-bootstrap/Form';
import React,{ useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

function SetTags({dataRow, handleSchoolSelect}) {

     const [tags,setTags] = useState([])

     async function clientSideGetData() {
          try {
              //console.log("Attempting to fetch data from google sheet")
              await google.script.run
                  .withSuccessHandler(displaySheetData)
                  .serverSideGetData("Tags",2,1,2);
        
          } catch (error) {
              console.error("Error fetching data: ", error)
          }
        }
      
        useEffect(()=>{
          clientSideGetData()
        },[])


        function displaySheetData(response) {
          const data = JSON.parse(response)
          setTags(data)
      }

    return (
     <Form.Group>
     <Form.Label className='small p-0 text-muted'>Please check any of the following for {dataRow[1]} {dataRow[2]}</Form.Label>
     {tags.map((tag,idx)=>{
          return(
               <Form.Check
               type="switch"
               id="custom-switch"
               key={idx}
               label={tag[1]}
               value={tag[1]}
             />
          )
     })}
      {tags.length>0? <Button variant="primary" onClick={handleSchoolSelect}>Next</Button> :'' }
   
 </Form.Group>
    );
}

export default SetTags;
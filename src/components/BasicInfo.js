
import React from 'react'

function BasicInfo({dataRow}) {
  return (
    <React.Fragment>
          <p className='small p-0'>DOB: {new Date(dataRow[3]).toLocaleDateString('en-US')}</p>
          <p className='small p-0'>Grade Level: {dataRow[4]}</p>
          <p className='small p-0'>School: {dataRow[5]}</p>
          <p className='small p-0'>Parent: {dataRow[6]}</p>
          <p className='small p-0'>Parent Phone: {dataRow[7]}</p>
          <p className='small p-0'>Status: {dataRow[8]}</p>
    </React.Fragment>
  )
}

export default BasicInfo;
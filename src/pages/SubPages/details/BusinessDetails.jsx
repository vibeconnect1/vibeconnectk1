import React from 'react'
import { useParams } from 'react-router-dom'

const BusinessDetails = () => {
  const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default BusinessDetails

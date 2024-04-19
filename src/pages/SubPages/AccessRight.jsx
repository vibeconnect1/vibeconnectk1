import React, { useState } from 'react'
import List from '../../containers/List'

const AccessRight = () => {
    const [tab, setTab]= useState("all")

    const handleAllTab = ()=>{
        setTab('all')
    }
    const handleInvTab = ()=>{
        setTab('inv')
    }
    const handlesetupTab = ()=>{
        setTab('setup')
    }
    const handlesQuickgateTab = ()=>{
        setTab('quick')
    }
  return (
    <div>
      <div>
        <ul className='flex justify-around border-b p-2'>
            <li className='cursor-pointer' onClick={handleAllTab}>All Function</li>
            <li className='cursor-pointer' onClick={handleInvTab}>Inventory</li>
            <li className='cursor-pointer' onClick={handlesetupTab}>Setup</li>
            <li className='cursor-pointer' onClick={handlesQuickgateTab}>Quickgate</li>
        </ul>
        {/* <div className="mt-4">
       <table className="border-collapse w-full ">
        <thead>
            <tr>
                <th className='w-[20rem]'> </th>
                <th>All</th>
                <th>Add</th>
                <th>View</th>
                <th>Edit</th>
                <th>Disable</th>
            </tr>
        </thead>
       </table>
        </div> */}
        <List/>
      </div>
    </div>
  )
}

export default AccessRight

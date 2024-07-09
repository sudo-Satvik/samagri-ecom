import React from 'react'
import './PkgCrd.css'
const Pkg = ({imgSource, packageName}) => {
  return (
    <div className="box p-5 mt-10 box">
        <img src={imgSource} alt="" />
        <h3>{packageName}</h3>
    </div>
  )
}

export default Pkg
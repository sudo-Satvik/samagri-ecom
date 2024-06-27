import React from 'react'
import './PkgCrd.css'
import Card from '../ProductCard/Card'
import Pkg from './Pkg'

function PkgCrd() {
  return (
    <>
    <div className='package-card mx-auto'>
        <div className="title">
            <div className="small-bx"></div>
            <p>Packages</p>
        </div>
        <h3 className="text-2xl sm:text-3xl text-gray-900 font-semibold mt-4">Browse by Packages</h3>
        <div className="card-grp">
            <Pkg packageName={"Bla Bla Bla"}/>
        </div>
    </div>
    </>
  )
}

export default PkgCrd
import React from 'react'
import { categories } from '../../assets/assets'


const ExploreMenu = () => {
  return (
    <div className="explore-menu position-relative" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <h1 className="d-flex align-items-center justify-content-between">
            Explore Our Menu
            <div className="d-flex">
            <i className='bi bi-arrow-left-circle'></i>
            <i className='bi bi-arrow-right-circle'></i>
        </div>
        </h1>
        <p>Top Categories</p>
        <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list">
            {
                categories.map((item, index) => {
                    return (
                        <div key={index} className="text-center explore-menu-list-item">
                            <img src={item.icon} className='rounded-circle' height={128}/>
                            <p className="mt-2 fw-bold">{item.category}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default ExploreMenu
import React from 'react'
import FoodDisplay from './../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="input-group mb-3">
              <select className='form-select mt-2' style={{'maxWidth': '150px'}}>
                <option value="Ice Cream">Ice Cream</option>
                <option value="Pizza">Pizza</option>
              </select>
              <input type="text" className="form-control mt-2" placeholder='Search your favorite dish...' />
              <button className='btn btn-primary mt-2' type='submit'>
              <i className='bi bi-search'></i></button>

            </div>
          </form>
        </div>
      </div>
    </div>
    <FoodDisplay />
    </>
  )
}

export default ExploreFood
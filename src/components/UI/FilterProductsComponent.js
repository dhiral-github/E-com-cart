import { Slider } from '@mui/material';
import React from 'react';
import { Form, FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilterProducts } from '../../redux/actionCreators/productActions';

const FilterProductsComponent = (props) => {
  const dispatch = useDispatch();
  const { rangePrice, categoryFilter, ratingStar } = useSelector((state) => state.allproducts.filterData);
  const { products } = useSelector((state) => state.allproducts);
  const { onChangeRange, onhandleCheck, minChange, maxChange, onRatingStar, filterProductsLength } = props;

  const clearFilter = () => {
    dispatch(clearFilterProducts());
  }

  const catName = products.map((obj) => obj.category)
  let cateObj = [...new Set(catName)]

  return (
    <>
      <section>
        <div style={{textAlign:'center'}} >
          <div style={{
            fontSize: '15px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: ' .3px',
            display: 'inline-block',
            border:'1px black solid',
            backgroundColor:'aliceblue'
          }}>filter ({`${filterProductsLength} Item`})</div>
        </div>
        <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: ' .3px',
              display: 'inline-block',
              backgroundColor:'aliceblue'
            }}>Price Range</div>
          </div>
          <div>
            <button style={{
              cursor: 'pointer',
              color: '#2874f0',
              fontSize: '12px',
              textTransform: 'uppercase',
              fontWeight: '500',
              border: 'none',
              background: 'white'
            }}
              onClick={clearFilter}
            >Clear</button>
          </div>
        </div>
        <div>
          <Slider
            value={rangePrice}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            onChange={onChangeRange}
            min={0}
            max={1000}
            style={{ width: '90%', left: '12px' }}
          />

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <input type='number' style={{ width: '100px' }} value={rangePrice[0]} onChange={minChange}></input>
          <input type='number' style={{ width: '100px' }} value={rangePrice[1]} onChange={maxChange}></input>
        </div>
        <span>price {rangePrice[0]} to between {rangePrice[1]}</span>
      </section>
      <hr />
      <section>
        <div
          className='mb-2'
          style={{
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: ' .3px',
            display: 'inline-block',
            backgroundColor:'aliceblue'
          }}>Category</div>
        <div>
          <Form.Control
            as="select"
            onChange={(event) => onhandleCheck(event.target.value)}
            value={categoryFilter}
            name='category'
          >
            <option>Select category</option>
            {cateObj.map((i, key) => {
              return (
                <option value={i} key={key}>
                  {i}
                </option>
              );
            })}
          </Form.Control>

        </div>
      </section>
      <hr />
      <section>
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '.3px',
            display: 'inline-block',
            backgroundColor:'aliceblue'
          }}>Customer Ratings</div>

          <div className='RatingProduct'>
            <div >
              <Form.Check label='4 * & above' value={4} onChange={onRatingStar} />
            </div>
            <div >
              <Form.Check label='3 * & above' value={3} onChange={onRatingStar} />
            </div>

          </div>
        </div>
      </section>
      <hr />
    </>
  );
}


export default FilterProductsComponent;
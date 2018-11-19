import React, { Component } from 'react';
import './index.css';

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p className="modal-desc">Filter charities By:</p>
            <div className="filter">
            <div className="part1">
              <label className="container-modal">
                Income
                <input type="radio" name="radio" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="numbers">
              <label htmlFor="from">
                From
                <input type="number" name="from" className="from" />
                <span>&euro;</span>
              </label>
<br/>
              <label htmlFor="to">
                To
                <input type="number" name="to" className="to" />
                <span>&euro;</span>
              </label>
            </div>
            </div>

            <div className="filter">
              <div className="part2">
                <label className="container-modal">
                  Expenditure
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>

              <div className="numbers2">
                <label htmlFor="from">
                  From
                  <input type="number" name="from" className="from" />{' '}
                  <span>&euro;</span>
                </label>
                <br/>
                <label htmlFor="to">
                  To
                  <input type="number" name="to" className="to" />
                  <span>&euro;</span>
                </label>
              </div>
            </div>


          <div className="filter">
              <div className="part2">
                <label className="container-modal">
                  Category
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
              </div>

              <div className="numbers2">
                <select name="" id="" className="select-catgery">
                  <option value="0">Select catgery:</option>
                  <option value="1" className="Children">
                    Audi
                  </option>
                  <option value="2" className="Women">
                    BMW
                  </option>
                </select>
              </div>
            </div>

           <div className="button-div">
              <button className="search-button" > Search</button>
            </div>


          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;

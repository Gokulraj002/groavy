import React from 'react';
import './NewsContent.css';
import news from '../../../images/womens-day.jpg'

const NewsContent = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-12 col-md-6'>
              <div className='position-relative newscol'>
                <img className='news-img' src={news} alt='news-details'/>
                <div className='overlay'></div>
                <div className='position-absolute top-50 start-50 translate-middle news-content'>
                  <h5 className='newsh5 text-center text-white'>WOMEN'S DAY CELEBRATION</h5>
                  <p className='news-p text-white text-center'>8 March</p>
                </div>
              </div>
            </div>


            <div className='col-12 col-md-6'>
              <div className='position-relative newscol'>
                <img className='news-img' src={news} alt='news-details'/>
                <div className='overlay'></div>
                <div className='position-absolute top-50 start-50 translate-middle news-content'>
                  <h5 className='newsh5 text-center text-white'>WOMEN'S DAY CELEBRATION</h5>
                  <p className='news-p text-white text-center'>8 March</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='position-relative newscol'>
                <img className='news-img' src={news} alt='news-details'/>
                <div className='overlay'></div>
                <div className='position-absolute top-50 start-50 translate-middle news-content'>
                  <h5 className='newsh5 text-center text-white'>WOMEN'S DAY CELEBRATION</h5>
                  <p className='news-p text-white text-center'>8 March</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='position-relative newscol'>
                <img className='news-img' src={news} alt='news-details'/>
                <div className='overlay'></div>
                <div className='position-absolute top-50 start-50 translate-middle news-content'>
                  <h5 className='newsh5 text-center text-white'>WOMEN'S DAY CELEBRATION</h5>
                  <p className='news-p text-white text-center'>8 March</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='position-relative newscol'>
                <img className='news-img' src={news} alt='news-details' />
                <div className='overlay'></div>
                <div className='position-absolute top-50 start-50 translate-middle news-content'>
                  <h5 className='newsh5 text-center text-white'>WOMEN'S DAY CELEBRATION</h5>
                  <p className='news-p text-white text-center'>8 March</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsContent

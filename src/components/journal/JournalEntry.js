import React from 'react';

export const JournalEntry = () => {
  return <div className='journal__entry pointer'>
      <div className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg)'
        }}
      >    
      </div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
            Nuevo dia
        </p>
        <p className='journal__entry-content'>
            Nuevo dia jsjadjj asjdajsdja j 
        </p>
      </div>
      <div className='journal__entry-date'>
        <span>monday</span>
        <h4>28</h4>
      </div>
  </div>;
};

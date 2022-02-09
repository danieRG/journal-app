import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {

  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id,{
      date, title, body, url
      })
    );
  }

  return <div 
    className='journal__entry pointer'
      onClick={handleEntryClick}
    >

    {
      url &&
      <div className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg)'
        }}
      >    
      </div>
    }

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
            { title }
        </p>
        <p className='journal__entry-content'>
            { body } 
        </p>
      </div>
      <div className='journal__entry-date'>
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
  </div>;
};

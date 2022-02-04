import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
  return <aside className='journal__siderbar'>
      <div className='journal__siderbar-navbar'>
          <h3 className='mt-5'>
              <i className='fas fa-book-open'></i>
              <span> daniel</span>
          </h3>
          <button className='btn'>
              Logout
          </button>
      </div>
      <div  className='journal__new-entry'>
          <i className='fas fa-calendar-plus fa-5x'></i>
          <p className='mt-5'>New Entry</p>
      </div>

      <JournalEntries />
  </aside>;
};

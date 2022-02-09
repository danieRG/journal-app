import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes); 
    const [formValues, handleInputChange, reset] = useForm( note );
    const { title, body } = formValues;
    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    },[note, reset]);

  return <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input type="text"
            placeholder='Some awesome title'
            className='notes__title-input'
            autoComplete='off'
            value={title}
            onChange={handleInputChange}
        />
        <textarea
            placeholder='What happened today?'
            className='notes__textarea'
            value={body}
            onChange={handleInputChange}
        >

        </textarea>
        {
            (note.url) &&
            (<div className='notes__image'>
                <img src='https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg' 
                alt='imagen'
            />
            
            </div>)
}
      </div>
  </div>;
};

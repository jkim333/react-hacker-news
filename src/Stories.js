import React, { useContext } from 'react';
import { AppContext } from './context';

export default function Stories() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <section className='stories'>
      {state.stories.map((story) => {
        const { objectID, title, points, author, num_comments, url } = story;
        return (
          <article className='story' key={objectID}>
            <h4>{title}</h4>
            <p>{`${points ? points : ''} points by ${author ? author : ''} | ${
              num_comments ? num_comments : ''
            } comments`}</p>
            <a href={url} className='story__read-more' target='_blank'>
              read more
            </a>
            <button
              className='story__remove'
              onClick={() => dispatch({ type: 'remove', payload: objectID })}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
}

const getPage = (page, noPages) => {
  if (page < 0) {
    return noPages - 1;
  } else if (page > noPages - 1) {
    return 0;
  } else {
    return page;
  }
};

function reducer(state, action) {
  if (action.type === 'set-stories') {
    return {
      ...state,
      stories: action.payload.hits,
      loading: false,
      noPages: action.payload.nbPages,
    };
  }
  if (action.type === 'set-query') {
    return { ...state, query: action.payload };
  }
  if (action.type === 'loading') {
    return { ...state, loading: action.payload };
  }
  if (action.type === 'remove') {
    return {
      ...state,
      stories: state.stories.filter(
        (story) => story.objectID !== action.payload
      ),
    };
  }
  if (action.type === 'prev') {
    return { ...state, page: getPage(state.page - 1, state.noPages) };
  }
  if (action.type === 'next') {
    return { ...state, page: getPage(state.page + 1, state.noPages) };
  }
  throw new Error();
}

export { reducer };

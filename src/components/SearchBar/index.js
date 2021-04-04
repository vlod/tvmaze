import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Link, Redirect} from 'react-router-dom';

// import { search } from '../../store/shows';

import './index.scss';

const SearchBar = (props) => {
  const inputRef = useRef();
  const [searchText, setSearchText] = useState('');
  const [redirectTo, setRedirectTo] = useState();

  useEffect(() => {
    // page refresh will repopulate input
    if (document.location.pathname.length > 1) { // > 1 becz root path is '/'
      const searchingFor = document.location.pathname.replace(/\/search\//, '');
      setSearchText(decodeURIComponent(searchingFor));
    }

    // focus on the input field on page load
    inputRef.current.focus()
  }, []);

  const onInputChange = (e) => setSearchText(e.target.value);

  // NOT working
  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   setRedirectTo(`/search/${searchText}`);
  // }

  // NOT working
  // if you hit enter in input
  // if (redirectTo) return <Redirect to={redirectTo} />;

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        {/* <form onSubmit={formSubmit}> */}
          <SearchOutlined />

          <input ref={inputRef} value={searchText} onChange={onInputChange} />
        {/* </form> */}
      </div>

      <Link
        to={`/search/${searchText}`}
        disabled={searchText.length > 0}
        className={`btn-search ${searchText.length === 0 ? 'disabled' : ''}`}
        title={searchText.length === 0 ? 'Enter search text' : null}
      >
        <span>Search</span>
      </Link>
    </div>
  );
};

export default SearchBar;

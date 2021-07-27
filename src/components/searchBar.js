import React from 'react';

const SearchBar = (props) => {
    const mySearch = React.useRef(null);
    return (
        <div id='searchContainer'>
            <form>
                <input type='text' ref={mySearch}></input>
                <button onClick={(event) => {
                    event.preventDefault()
                    props.searchFunc(mySearch.current.value)
                    }}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
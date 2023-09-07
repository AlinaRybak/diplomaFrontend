import React from "react";
import "./App.css";

function SearchBar( { searchQuery, setSearchQuery }){
    return<div>
        <input className="search-input"
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
}

export default SearchBar;
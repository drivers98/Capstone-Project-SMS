import React from "react"

const SearchBar = (props) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"2px solid grey", border_radius: "5px", padding:"0.5srem"};
  
    return (
      <input 
       style={BarStyling}
       type="search"
       key="random1"
       value={props.value}
       placeholder={props.placeholder}
       onChange={props.handle}
      />
    );
  }

  export default SearchBar;
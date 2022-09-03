import { useState, useEffect } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  APPLY_TITLE_FILTER,
  SET_SEARCH_TERM,
} from "../../constants/actionTypes";

const Search = (props) => {
  console.log(props.searchTerm);
  const { onSearchTermChange, searchTerm, onInputChange } = props;
  // const [searchTerm, setSearchTerm] = useState("");
  const [
    userTypedRequiredNumberOfCharacters,
    setUserTypedRequiredNumberOfCharacters,
  ] = useState(false);

  const handleOnChange = (e) => {
    onInputChange(e.target.value);
  };

  useEffect(() => {
    if (searchTerm?.length === 3) {
      setUserTypedRequiredNumberOfCharacters(true);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (userTypedRequiredNumberOfCharacters) {
      onSearchTermChange(
        searchTerm,
        (page) => agent.Items.byTitle(searchTerm, page),
        agent.Items.byTitle(searchTerm)
      );
    }
  }, [searchTerm, userTypedRequiredNumberOfCharacters, onSearchTermChange]);

  return (
    <input
      type="text"
      id="search-box"
      value={searchTerm}
      onChange={handleOnChange}
    />
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.itemList.searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (searchTerm, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, searchTerm, pager, payload }),
  onInputChange: (searchTerm) =>
    dispatch({ type: SET_SEARCH_TERM, searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

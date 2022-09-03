import { useState, useEffect } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const Search = (props) => {
  const { onSearchTermChange } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [userTypedRequiredCharacters, setUserTypedRequiredCharacters] =
    useState(false);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length === 3) {
      setUserTypedRequiredCharacters(true);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (userTypedRequiredCharacters) {
      onSearchTermChange(
        searchTerm,
        (page) => agent.Items.byTitle(searchTerm, page),
        agent.Items.byTitle(searchTerm)
      );
    }
  }, [searchTerm, userTypedRequiredCharacters, onSearchTermChange]);

  return (
    <input
      type="text"
      id="search-box"
      value={searchTerm}
      onChange={handleOnChange}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (searchTerm, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, searchTerm, pager, payload }),
});

export default connect(null, mapDispatchToProps)(Search);

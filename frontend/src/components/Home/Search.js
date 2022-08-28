import {useState, useEffect} from 'react'
import agent from "../../agent";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if (searchTerm.length > 2) {
      props.onSearchTermChange(
        searchTerm,
        (page) => agent.Items.byTitle(searchTerm, page),
        agent.Items.byTitle(searchTerm)
      )
    }
  }, [searchTerm])

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleOnChange} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (searchTerm, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, searchTerm, pager, payload}),
});

export default connect(null, mapDispatchToProps)(Search)

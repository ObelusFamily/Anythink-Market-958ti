import {useState, useEffect} from 'react'
import agent from "../../agent";
import { connect } from "react-redux";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isInitial, setIsInitial] = useState(true)

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    if (isInitial && searchTerm.length > 2) {
      setIsInitial(false)
      props.onSearchTermChange(
        searchTerm,
        (page) => agent.Items.byTitle(searchTerm, page),
        agent.Items.byTitle(searchTerm)
      )
    }
  }, [searchTerm])

  return <input type="text" value={searchTerm} onChange={handleOnChange} />
}

const mapDispatchToProps = (dispatch) => ({
  onSearchTermChange: (searchTerm, pager, payload) =>
    dispatch({ type: APPLY_TITLE_FILTER, searchTerm, pager, payload}),
});

export default connect(null, mapDispatchToProps)(Search)

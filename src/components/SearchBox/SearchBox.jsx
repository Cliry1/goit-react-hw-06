import css from "./SearchBox.module.css"
import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {

  const dispatch = useDispatch();
  const handleChange = (e)=>{
    dispatch(changeFilter(e.target.value))
  }

  return (
  <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input className={css.input} type="text" name="filter"  onChange={handleChange}></input>
  </div>
  )
}


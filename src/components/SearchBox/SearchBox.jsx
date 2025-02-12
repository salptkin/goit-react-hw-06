import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filter.search);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      {" "}
      <input
        onChange={handleSearch}
        type="search"
        placeholder="Search contacts..."
        value={filterName}
      />
    </div>
  );
}

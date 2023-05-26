import { useDispatch, useSelector } from "react-redux"
import { filterByRating } from "./productSlice"
import { GrStar } from "react-icons/gr"
import { useState, useEffect } from "react";
export default function Rating() {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const dispatch = useDispatch()
  const handleCategoryChange = (event, ratings) => {

    const isChecked = event.target.checked;
    let updatedRatings = [...selectedRatings];
    if (isChecked) {
      updatedRatings.push(ratings);
    } else {
      updatedRatings = updatedRatings.filter(
        (selectedRating) => selectedRating !== ratings
      );
    }
    ;
    setSelectedRatings(updatedRatings);
  };

  useEffect(() => {
    dispatch(filterByRating({ rating: selectedRatings }));
  }, [dispatch, selectedRatings]);

  return (
    <>
      <div className="star_Rating">
        <pre className="customer-ratings">CUSTOMER RATINGS</pre>
        {[1, 2, 3, 4].map((n) => (
          <div>
            <input
              type="checkbox"
              value={n}
              onChange={(event) => handleCategoryChange(event, n)}
            />
            <label>{n} <GrStar /> & above</label><br />
          </div>
        ))}
      </div>


    </>
  )
}
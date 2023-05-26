import { useDispatch } from "react-redux"
import { filterByRating } from "../productSlice"

export default function StarCount() {
    const dispatch = useDispatch()
    function starRating(e) {
        const selectRating = parseInt(e.target.value)
        dispatch(filterByRating({ rating: selectRating }))
    }

    return (
        <>
            <select onChange={starRating} name="first-star">
                <option value="0">All</option>
                <option value="1">1 & above</option>
                <option value="2">2 & above</option>
                <option value="3">3 & above</option>
                <option value="4">4 & above</option>
            </select>
        </>
    )
}
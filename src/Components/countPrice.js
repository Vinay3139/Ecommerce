import { useDispatch} from "react-redux"
import { filterByPrice } from "./productSlice"
import "../Components/FlipkartTask/Stock.css"

export default function CountPrice(e) {
    const dispatch = useDispatch()
    function handleChange(e) {
        dispatch(filterByPrice(e.target.value))
    }

    return (
        <>
            <div onClick={handleChange} className="countPrice">
                <option value="low-price" style={{ marginRight: "100px" }}>Sort By &nbsp;&nbsp;&nbsp;&nbsp;   Price -Low to High</option>
                <option value="high-price">Price -High to Low</option>
            </div>
        </>
    )
}
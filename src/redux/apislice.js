import { createSlice } from "@reduxjs/toolkit"


const ProdAPi = createSlice({
    name : "products",
    initialState : {
        data:[],
        filterprods:[]
    },
    reducers : {

        setprods : (state, action) => {
            state.data = action.payload
            state.filterprods = action.payload
        },
        ratingFilter : (state, action) => {
            const rate = action.payload
            state.filterprods = state.data.filter((item)=> item.rating.rate == rate)
            console.log("redux back",state.filterprods, "rate", rate, )
        }
    }

})

export const {setprods, ratingFilter} = ProdAPi.actions
export default ProdAPi.reducer
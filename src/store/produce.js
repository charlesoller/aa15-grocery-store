import produceData from "../mockData/produce.json"
const POPULATE = "produce/populate"

export const populateProduce = () => {
    return {
        type: POPULATE,
        payload: produceData
    }
}

export const produceReducer = (state = {}, action) => {
    switch(action.type){
        case POPULATE:
            const newState = {};
            action.payload.forEach(produce => {
                newState[produce.id] = produce
            })
            return newState
        default:
            return state
    }
}

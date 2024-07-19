import { combineReducers } from '@reduxjs/toolkit'
import apifeed, { FeedState } from './feedSlice'

const reducer = combineReducers({
    apifeed,
})

export type AllFeedState = {
    apifeed: FeedState
}

export * from './feedSlice'

export default reducer

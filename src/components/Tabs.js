import React from 'react'
import { TABS } from '../actions/types'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../actions/todoActions'
function Tabs({ currentTab }) {
    const dispatch = useDispatch()
    return (
        TABS.map(tab => (
            <button className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}>
                {tab}
            </button>
        ))
    )
}

export default Tabs
import React from 'react'
import ClickHandler from './ClickHandler'
import Counter from './Counter'
import HoverHandler from './HoverHandler'

 function RenderProps() {
    return (
        <div>
        <Counter render= {(count, incrementCount) => (
            <ClickHandler count={count} incrementCount= {incrementCount} />
        )} />

        <Counter render= {(count, incrementCount) => (
            <HoverHandler count={count} incrementCount= {incrementCount} />
        )} />

        {/* <ClickHandler />
        <HoverHandler /> */}
        </div>
    )
}

export default RenderProps

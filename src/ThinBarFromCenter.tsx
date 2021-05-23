import React from 'react'
import {useStyle} from './hooks'
import withContext from './withContext'
interface TBFCProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function
}

const ThinBarFromCenter = (props : TBFCProps)  => {
    const {blockStyle, barXStyle, barYStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div>
            <div onClick = {() => props.onClick()} style = {blockStyle()}></div>
            {[0, 1].map(i => (<div key = {`barx_${i}`} style = {barXStyle(i)}></div>))}
            {[0, 1].map(i => (<div key = {`bary_${i}`} style = {barYStyle(i)}></div>))}
        </div>
    )
}

export default withContext(ThinBarFromCenter)
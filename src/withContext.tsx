import React from 'react'
import {useAnimatedScale, useDimension } from './hooks'

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const newProps = {
            w, 
            h, 
            scale,
            onClick 
        }
        return (
            <MainComponent {...newProps}>
            </MainComponent>
        )
    }
}

export default withContext 
import {useEffect, useState} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimateScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false) 
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setScale(0)
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}
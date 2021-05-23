import {CSSProperties, useEffect, useState} from 'react'

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

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, h
    }
}

export const useStyle = (w : number, h : number, scale : number) {
    const sf : number = Math.sin(scale * Math.PI)
    const bw : number = Math.min(w, h) / 9
    const sw : number = Math.min(w, h) / 15 
    const position = 'absolute'
    const x : number = w / 2
    const y : number = h / 2
    const background : string = "indigo"
    return {
        blockStyle() : CSSProperties {
            const width = `${bw}px`
            const height = `${bw}px`
            const left = `${w / 2 - bw / 2}px`
            const top = `${h / 2 - bw / 2}px`
            return {
                position, 
                width, 
                height, 
                top, 
                left,
                background 
             }
        },
        barXStyle(i : number) : CSSProperties {
            const left = `${(w / 2 - bw / 2) * (1 - sf) * (1 - i) + (w / 2 + bw / 2) * i}px`
            const top = `${h / 2 - bw / 2}px`
            const width = `${(w / 2 - bw / 2) * scale}px`
            const height = `${bw}px`
            return {
                left, 
                top, 
                width, 
                height, 
                position, 
                background 
            }

        },
        barYStyle(i : number) : CSSProperties {
            const left = `${bw}px`
            const top = `${(h / 2 - bw / 2) * (1 - sf) * (1 - i) + (h / 2 + bw / 2) * i}px`
            const width = `${bw}px`
            const height = `${(h / 2 - bw / 2) * sf}px`
            return {
                position, 
                left,
                top, 
                width, 
                height,
                background 
            }
        }
    } 
}
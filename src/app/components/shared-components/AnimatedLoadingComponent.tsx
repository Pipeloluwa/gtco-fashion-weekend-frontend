import React from 'react'

interface IAnimatedLoadingComponent{
    height: string;
    width: string;
    rounded?: string
}

const AnimatedLoadingComponent:React.FC<IAnimatedLoadingComponent> = ({width, height, rounded=""}) => {
  return (
    <div className={`${width} ${height} ${rounded} flex animate-pulse bg-gray-500`}/>
  )
}

export default AnimatedLoadingComponent;
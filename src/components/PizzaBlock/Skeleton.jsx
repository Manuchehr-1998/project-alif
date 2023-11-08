import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={4}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#d73c3c"
    foregroundColor="#ecebeb"
    {...props}
  >
     <circle cx="109" cy="93" r="87" /> 
    <rect x="9" y="203" rx="10" ry="10" width="237" height="20" /> 
    <rect x="12" y="246" rx="10" ry="10" width="247" height="95" /> 
    <rect x="139" y="322" rx="0" ry="0" width="13" height="3" /> 
    <rect x="18" y="361" rx="10" ry="10" width="64" height="35" /> 
    <rect x="143" y="360" rx="10" ry="10" width="116" height="33" />
  </ContentLoader>
)

export default Skeleton
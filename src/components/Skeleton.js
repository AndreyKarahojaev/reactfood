import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={4}
    width={450}
    height={600}
    viewBox="0 0 450 600"
    backgroundColor="#ede3e3"
    foregroundColor="#dcf3f9"
    {...props}
  >
    <rect x="11" y="44" rx="5" ry="5" width="161" height="30" /> 
    <rect x="8" y="83" rx="0" ry="0" width="400" height="364" /> 
    <rect x="9" y="457" rx="7" ry="7" width="288" height="48" /> 
    <rect x="11" y="512" rx="0" ry="0" width="98" height="54" /> 
    <rect x="297" y="506" rx="5" ry="5" width="109" height="61" /> 
    <rect x="124" y="512" rx="0" ry="0" width="107" height="52" />
  </ContentLoader>
)

export default Skeleton;
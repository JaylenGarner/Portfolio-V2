import { ShaderGradient } from 'shadergradient'
import { useEffect } from 'react'

// Dom components go here
export default function Page(props) {
  useEffect(() => {
  }, [])
  return <></>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) =>

<ShaderGradient
uSpeed={.3}
uStrength={1.7}
color2='89CFF0'
color1='000000'
color3='474747'
/>

{/* <ShaderGradient
type={"plane"}
animate={"on"}
uTime={0}
uSpeed={0.3}
uStrength={1.5}
uDensity={0.8}
uFrequency={5.5}
uAmplitude={1}
positionX={-0.1}
positionY={0}
positionZ={0}
rotationX={0}
rotationY={0}
rotationZ={45}
color1={"000000"}
color2={"FF0000"}
color3={"0000FF"}
reflection={0.6}
shader={"defaults"}
dampingFactor={0}
cAzimuthAngle={0}
cPolarAngle={0}
cDistance={0.5}
cameraZoom={0}
// brightness={0.8}
// envPreset={"dawn"}
/> */}


export async function getStaticProps() {
  return { props: { title: 'Index' } }
}

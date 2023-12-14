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
positionX={-0.1}
rotationY={130}
rotationZ={70}
cAzimuthAngle={270}
cPolarAngle={180}
cDistance={5} />


export async function getStaticProps() {
  return { props: { title: 'Index' } }
}

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

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}

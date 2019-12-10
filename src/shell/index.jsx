import { createElement, Fragment, useEffect, useState } from 'rax'

function Shell(props) {
  const [showSkeleton, setShowSkeleton] = useState(true)
  useEffect(() => {
    setShowSkeleton(false)
  })
  return (
    <>
      <img style={{display:showSkeleton?'block':'none'}} src="data:image/png;base64,xxx" />
      {props.children}
    </>
  )
}

export default Shell

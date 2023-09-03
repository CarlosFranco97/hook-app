import { memo } from "react"

export const Small = memo(({value}) => {
  console.log('volvi a renderizar')
    return (
    <small>{value}</small>
  )
})

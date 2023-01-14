import React from 'react'
interface Props {
  message: string
}
export const Error = ({message}: Props) => {
  return (
    <section>
      <p>{message}</p>
    </section>
  )
}

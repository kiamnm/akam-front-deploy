import React from 'react'
import "./style.css"

export default function ClientLayout({children,bgColor}) {
  return (
    <div className={`client-layout w-100 ${bgColor}`}>{children}</div>
  )
}

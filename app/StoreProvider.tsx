'use client'

import { ReactNode, useRef } from "react"
import { Provider } from "react-redux";
import { store } from "@/lib/stores"

interface Props {
  children?: ReactNode
}

export default function StoreProvider({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

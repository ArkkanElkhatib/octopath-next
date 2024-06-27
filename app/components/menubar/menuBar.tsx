import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export default function MenuBar({ children }: Props) {
  return (
    <div id="menubar" className="sticky pt-2 left-0 text-5xl text-center z-30 text-gray-200 flex flex-wrap gap-2 px-2 pb-2">
      {children}
    </div>
  )
}

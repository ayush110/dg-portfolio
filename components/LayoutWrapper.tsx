import { noto_serif_khojki } from './Fonts'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}
const font = noto_serif_khojki
const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${font.className} font flex h-screen flex-col justify-between`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

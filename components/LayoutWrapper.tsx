import { inter } from './Fonts'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}
const header = inter
const footer = inter
const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${header.className} font flex h-screen flex-col justify-between`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <div className={`${footer.className} font `}>
          <Footer />
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper

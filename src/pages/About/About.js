import {HeaderAbout} from '../../features/HeaderAbout'
import {FooterAbout} from '../../features/FooterAbout'
import {InfoAbout} from '../../features/InfoAbout'

function About() {
  return (
    <div className="column">
      <HeaderAbout />
      <InfoAbout />
      <FooterAbout />
    </div>
  )
}

export {About}

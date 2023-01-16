import {HeaderVideo} from '../../features/HeaderVideo'
import {FooterVideo} from '../../features/FooterVideo'
import {InfoVideo} from '../../features/InfoVideo'

function Video() {
  return (
    <div className="column">
      <HeaderVideo />
      <InfoVideo />
      <FooterVideo />
    </div>
  )
}

export {Video}

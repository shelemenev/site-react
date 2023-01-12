import {HeaderMusic} from '../../features/HeaderMusic'
import {FooterMusic} from '../../features/FooterMusic'
import {InfoMusic} from '../../features/InfoMusic'

function Music() {
  return (
    <div className="column">
      <HeaderMusic />
      <InfoMusic />
      <FooterMusic />
    </div>
  )
}

export {Music}

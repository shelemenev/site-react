import {HeaderPlaces} from '../../features/HeaderPlaces'
import {FooterPlaces} from '../../features/FooterPlaces'
import {InfoPlaces} from '../../features/InfoPlaces'

function Places() {
  return (
    <div className="column">
      <HeaderPlaces />
      <InfoPlaces />
      <FooterPlaces />
    </div>
  )
}

export {Places}

import {HeaderResume} from '../../features/HeaderResume'
import {FooterResume} from '../../features/FooterResume'
import {InfoResume} from '../../features/InfoResume'

function Resume() {
  return (
    <div className="column">
      <HeaderResume />
      <InfoResume />
      <FooterResume />
    </div>
  )
}

export {Resume}

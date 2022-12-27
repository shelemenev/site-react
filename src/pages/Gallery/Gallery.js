import {HeaderGallery} from '../../features/HeaderGallery'
import {FooterGallery} from '../../features/FooterGallery'
import {InfoGallery} from '../../features/InfoGallery'

function Gallery() {
  return (
    <div className="column">
      <HeaderGallery />
      <InfoGallery />
      <FooterGallery />
    </div>
  )
}

export {Gallery}

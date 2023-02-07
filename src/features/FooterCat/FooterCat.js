import {Picture} from '../Picture'

function FooterCat() {

  return (
    <>
      <Picture />
	    <div className="row kick space-between hidden">
		    <a className='down' href='gallery.html'><img src="images/back.png" /></a>
		    <div className="goup"><img className='down' src="images/up.png" /></div>
		  </div>
		  <div className="row kick space-between hidden_mobile">
		    <div className="category big"><a className='color' href='gallery.html'>Назад</a></div>
		    <div className="category goup big"><img className='up' src="images/pic11.svg" /></div>
		  </div>
    </>
  )
}

export {FooterCat}

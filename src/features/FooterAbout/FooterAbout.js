function FooterAbout() {

  return (
    <>
	    <div className="kick hidden">
        <div className="goup"><img className='ten down' src="images/up.png" /></div>
		  </div>
		  <div className="row kick space-between hidden_mobile">
		    <div className="category big color" data-text="На главную"><a className='color' href='index.html'>На главную</a></div>
		    <div className="row">
		      <div className="category big color" data-text="Галерея"><a className='color' href='gallery.html'>Галерея</a></div>
		      <div className="category big color" data-text="Места"><a className='color' href='places.html'>Места</a></div>
		      <div className="category big color" data-text="Музыка"><a className='color' href='music.html'>Музыка</a></div>
		      <div className="category big color" data-text="Видео"><a className='color' href='video.html'>Видео</a></div>
		      <div className="category big color" data-text="Резюме"><a className='color' href='resume.html'>Резюме</a></div>
		    </div>
		  </div>
    </>
  )
}

export {FooterAbout}

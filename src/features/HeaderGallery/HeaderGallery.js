function HeaderGallery() {

	function menuFunction() {
	  const x = document.querySelector('.menu_mobile')

	  if (x === null || x === undefined) {
	    return
	  }

	  const isFlex = x.style.display == 'flex'
	  x.style.display = isFlex ? 'none' : 'flex'
  }

  return (
    <>
	    <div className="category_mobile menu_button end_2 hidden">///</div>
	    <h2>Галерея</h2>
	    <div className="menu_mobile hidden">
	      <div className="category_mobile end"><a onClick={menuFunction}><img src="images/cross.png" /></a></div>
	      <div className="category_mobile"><a href='index.html'>На главную</a></div>
	      <div className="category_mobile"><a href='about.html'>Обо мне</a></div>
	      <div className="category_mobile"><a href='places.html'>Места</a></div>
	      <div className="category_mobile"><a href='music.html'>Музыка</a></div>
	      <div className="category_mobile"><a href='video.html'>Видео</a></div>
	      <div className="category_mobile"><a href='resume.html'>Резюме</a></div>
	    </div>
    </>
  )
}

export {HeaderGallery}

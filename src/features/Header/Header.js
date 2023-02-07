import {Start} from '../Start'

function Header() {

  function main() {
	  const isPortrait = document.body.offsetHeight > document.body.offsetWidth
	  isPortrait && document.querySelector('.menu_button').addEventListener('click', menuFunction)
  }

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
	    <div className="menu display">
	      <div className="row space-between hidden_mobile">
					<div className="row">
					  <div className="category big" data-text="Обо мне"><a href='about.html'>Обо мне</a></div>
					  <div className="category big" data-text="Галерея"><a href='gallery.html'>Галерея</a></div>
					  <div className="category big" data-text="Места"><a href='places.html'>Места</a></div>
					  <div className="category big" data-text="Музыка"><a href='music.html'>Музыка</a></div>
					  <div className="category big" data-text="Видео"><a href='video.html'>Видео</a></div>
					  <div className="category big" data-text="Резюме"><a href='resume.html'>Резюме</a></div>
					</div>
	      </div>
	      <div className="column">
					<div className="category_mobile menu_button end_2 hidden">///</div>
					<Start />
					<div className="menu_mobile hidden">
					  <div className="category_mobile end"><a onClick={menuFunction}><img src="images/cross.png" /></a></div>
					  <div className="category_mobile"><a href='about.html'>Обо мне</a></div>
					  <div className="category_mobile"><a href='gallery.html'>Галерея</a></div>
					  <div className="category_mobile"><a href='places.html'>Места</a></div>
					  <div className="category_mobile"><a href='music.html'>Музыка</a></div>
					  <div className="category_mobile"><a href='video.html'>Видео</a></div>
					  <div className="category_mobile"><a href='resume.html'>Резюме</a></div>
					</div>
					<img className="background" src="images/background.jpeg" />
					<img className="picture" src="images/01.jpeg" />
	      </div>
	    </div>
    </>
  )
}

export {Header}

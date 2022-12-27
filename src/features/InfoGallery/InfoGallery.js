function InfoGallery() {

  return (
    <>
      <img className="background" src="images/background1.jpeg" />
  	  <div className="content">
        <div className="row-desktop space-between">
          <div className="column gallery">
            <a href="dog.html">
              <img src="images/02.jpeg" />
            </a>
            <div><a href="dog.html">Собака</a></div>
          </div>
          <div className="column gallery">
            <a href="me.html">
              <img src="images/01.jpeg" />
            </a>
            <div><a href="me.html">Я</a></div>
          </div>
          <div className="column gallery">
            <a href="cat.html">
              <img src="images/03.jpeg" />
            </a>
            <div><a href="cat.html">Кот</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export {InfoGallery}

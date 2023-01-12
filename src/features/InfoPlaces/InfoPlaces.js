function InfoPlaces() {

  return (
    <>
      <img className="background" src="images/background1.jpeg" />
  	  <div className="content hidden_mobile">
        <div className="row space-between">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A428e949043d8c4c5992f4bf1581abd4ac8e9b7d25014d06b882f491f61f7095f&amp;source=constructor" width="1022" height="720" frameborder="0"></iframe>
      </div>
      </div>
      <div className="content hidden">
        <div className="row-desktop space-between">
          <div className="column gallery">
            <a href="kujenkino.html">
              <img src="images/куженкино/01.jpg" />
            </a>
            <div><a href="kujenkino.html">Куженкино</a></div>
          </div>
          <div className="column gallery">
            <a href="nosovo.html">
              <img src="images/носово/01.jpg" />
            </a>
            <div><a href="nosovo.html">Носово</a></div>
          </div>
          <div className="column gallery">
            <a href="tver.html">
              <img src="images/тверь/20.jpg" />
            </a>
            <div><a href="tver.html">Тверь</a></div>
          </div>
          <div className="column gallery">
            <a href="moscow.html">
              <img src="images/москва/10.jpg" />
            </a>
            <div><a href="moscow.html">Москва</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export {InfoPlaces}

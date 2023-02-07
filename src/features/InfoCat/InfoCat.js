import {Picture} from '../Picture'

function InfoCat() {

  return (
    <>
      <Picture />
      <h2>Кот</h2>
      <img className="background" src="images/background1.jpeg" />
    	<div className="content hidden_mobile">
        <div className="row space-between">
          <div className="column photo">
            <img src="images/кот/01.jpg" />
            <div>1 сентября 2015г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/02.jpg" />
            <div>4 октября 2015г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/03.jpg" />
            <div>8 марта 2016г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/04.jpg" />
            <div>27 марта 2017г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/05.jpg" />
            <div>12 июля 2014г.</div>
          </div>
        </div>
        <div className="row space-between">  
          <div className="column photo">
            <img src="images/кот/06.jpg" />
            <div>30 июля 2014г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/07.jpg" />
            <div>27 марта 2015г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/08.jpg" />
            <div>28 марта 2015г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/09.jpg" />
            <div>2 апреля 2015г.</div>
          </div>
          <div className="column photo">
            <img src="images/кот/10.jpg" />
            <div>15 октября 2016г.</div>
          </div>
        </div>
      </div>
      <div className="content hidden">
        <div className="row-desktop space-between">
          <div className="row one">
            <div className="column photo">
              <img src="images/кот/01.jpg" />
              <div>1 сентября 2015г.</div>
            </div>
            <div className="column photo">
              <img src="images/кот/02.jpg" />
              <div>4 октября 2015г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/кот/03.jpg" />
              <div>8 марта 2016г.</div>
            </div>
            <div className="column photo">
              <img src="images/кот/04.jpg" />
              <div>27 марта 2017г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/кот/05.jpg" />
              <div>12 июля 2014г.</div>
            </div>
            <div className="column photo">
              <img src="images/кот/06.jpg" />
              <div>30 июля 2014г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/кот/07.jpg" />
              <div>27 марта 2015г.</div>
            </div>
            <div className="column photo">
              <img src="images/кот/08.jpg" />
              <div>28 марта 2015г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/кот/09.jpg" />
              <div>2 апреля 2015г.</div>
            </div>
            <div className="column photo">
              <img src="images/кот/10.jpg" />
              <div>15 октября 2016г.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {InfoCat}

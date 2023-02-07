import {Picture} from '../Picture'

function InfoDog() {

  return (
    <>
      <Picture />
      <h2>Собака</h2>
      <img className="background" src="images/background1.jpeg" />
    	<div className="content hidden_mobile">
        <div className="row space-between">
          <div className="column photo">
            <img src="images/собака/01.jpg" />
            <div>2017 год</div>
          </div>
          <div className="column photo">
            <img src="images/собака/02.jpg" />
            <div>7 мая 2017г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/03.jpg" />
            <div>18 мая 2017г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/04.jpg" />
            <div>25 мая 2017г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/05.jpg" />
            <div>3 февраля 2018г.</div>
          </div>
        </div>
        <div className="row space-between">
          <div className="column photo">
            <img src="images/собака/06.jpg" />
            <div>27 апреля 2018г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/07.jpg" />
            <div>1 февраля 2020г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/08.jpg" />
            <div>6 мая 2020г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/09.jpg" />
            <div>3 июля 2020г.</div>
          </div>
          <div className="column photo">
            <img src="images/собака/10.jpg" />
            <div>3 июля 2020г.</div>
          </div>
        </div>
      </div>
      <div className="content hidden">
        <div className="row-desktop space-between">
          <div className="row one">
            <div className="column photo">
              <img src="images/собака/01.jpg" />
              <div>2017 год</div>
            </div>
            <div className="column photo">
              <img src="images/собака/02.jpg" />
              <div>7 мая 2017г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/собака/03.jpg" />
              <div>18 мая 2017г.</div>
            </div>
            <div className="column photo">
              <img src="images/собака/04.jpg" />
              <div>25 мая 2017г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/собака/05.jpg" />
              <div>3 февраля 2018г.</div>
            </div>
            <div className="column photo">
              <img src="images/собака/06.jpg" />
              <div>27 апреля 2018г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/собака/07.jpg" />
              <div>1 февраля 2020г.</div>
            </div>
            <div className="column photo">
              <img src="images/собака/08.jpg" />
              <div>6 мая 2020г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/собака/09.jpg" />
              <div>3 июля 2020г.</div>
            </div>
            <div className="column photo">
              <img src="images/собака/10.jpg" />
              <div>3 июля 2020г.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {InfoDog}

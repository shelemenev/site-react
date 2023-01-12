import {Picture} from '../Picture'

function InfoMoscow() {

  return (
    <>
      <h2>Москва</h2>
      <img className="background" src="images/background1.jpeg" />
      <div className="content hidden_mobile">
        <div className="row space-between">
          <div className="column photo">
            <img src="images/москва/01.jpg" />
            <div>11 мая 2012г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/02.jpg" />
            <div>11 мая 2012г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/03.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/04.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/05.jpg" />
            <div>21 мая 2013г.</div>
          </div>
        </div>
        <div className="row space-between">
          <div className="column photo">
            <img src="images/москва/06.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/07.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/08.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/09.jpg" />
            <div>21 мая 2013г.</div>
          </div>
          <div className="column photo">
            <img src="images/москва/10.jpg" />
            <div>21 мая 2013г.</div>
          </div>
        </div>
      </div>
      <div className="content hidden">
        <div className="row-desktop space-between">
          <div className="row one">
            <div className="column photo">
              <img src="images/москва/01.jpg" />
              <div>11 мая 2012г.</div>
            </div>
            <div className="column photo">
              <img src="images/москва/02.jpg" />
              <div>11 мая 2012г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/москва/03.jpg" />
              <div>21 мая 2013г.</div>
            </div>
            <div className="column photo">
              <img src="images/москва/04.jpg" />
              <div>21 мая 2013г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/москва/05.jpg" />
              <div>21 мая 2013г.</div>
            </div>
            <div className="column photo">
              <img src="images/москва/06.jpg" />
              <div>21 мая 2013г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/москва/07.jpg" />
              <div>21 мая 2013г.</div>
            </div>
            <div className="column photo">
              <img src="images/москва/08.jpg" />
              <div>21 мая 2013г.</div>
            </div>
          </div>
          <div className="row one">
            <div className="column photo">
              <img src="images/москва/09.jpg" />
              <div>21 мая 2013г.</div>
            </div>
            <div className="column photo">
              <img src="images/москва/10.jpg" />
              <div>21 мая 2013г.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {InfoMoscow}

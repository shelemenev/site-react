function Scroll() {
  let currentHeight = 0
  let scrollInterval

  function move() {
    alert('move')

    if (document.querySelector('.goup')) {
      const goups = document.querySelectorAll('.goup')

      for (let goup of goups) {
        goup.addEventListener('click', function() {
          scrollInterval = setInterval(scrollToEndPage, 40)
        })
      }

      window.addEventListener('scroll', function() {
        currentHeight = document.body.scrollTop
      })
    }
  }

  function loop() {
    document.addEventListener('DOMContentLoaded', move)
  }

  loop()

  function scrollToEndPage() {
    const step = currentHeight / 10

    if (currentHeight > 0) {
      currentHeight -= step
      window.scrollTo(currentHeight + step, currentHeight)
    } else {
      clearInterval(scrollInterval)
      currentHeight = 0
    }
  }
}

export {Scroll}
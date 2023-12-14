document.addEventListener('DOMContentLoaded', function () {
  const revealDiv = document.getElementById('elementToHide')

  setTimeout(function () {
    revealDiv.remove()
  }, 1500)
})

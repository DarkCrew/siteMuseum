const progress = document.querySelector('.progress');
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

const progressVolume = document.querySelector('.progressVolume')
progressVolume.addEventListener('input', function(){
    const valueVolume = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${valueVolume}%, #fff ${valueVolume}%, white 100%)`
})
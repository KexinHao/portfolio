function showEnglish() {
  document.querySelector('.english').style.display = 'block';
  document.querySelector('.chinese').style.display = 'none';
}

function showChinese() {
  document.querySelector('.english').style.display = 'none';
  document.querySelector('.chinese').style.display = 'block';
}

document.querySelectorAll('.div1, .div2, .div3, .div4, .div5, .div6').forEach(function(div) {
  div.addEventListener('click', function(event) {
    // Don't interfere if user clicked directly on a link
    if (event.target.tagName.toLowerCase() === 'a') return;

    const link = div.querySelector('a');
    if (!link) return;

    // Open based on the link's target
    if (link.target === '_blank') {
      window.open(link.href, '_blank');
    } else {
      window.location.href = link.href;
    }
  });
});

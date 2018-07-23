document.getElementById('form').onsubmit = () => {
  const selected = document.querySelector('input[name="br"]:checked').id;
  let unsei
  switch (selected) {
    case 'br-close': unsei = '大吉'; break;
    case 'br-close-nospace': unsei = '吉'; break;
    case 'br-open-close': unsei = '凶'; break;
    case 'br-noclose': unsei = '大凶'; break;
  }
  result = document.getElementById('result')
  result.textContent = unsei
  return false
}

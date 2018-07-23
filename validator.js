document.getElementById('button').onclick = () => {
  const text = document.getElementById('text').value;
  result = document.getElementById('result')
  validate(text).then(val => {
    result.style.color = '#000000'
    result.textContent = val
  }).catch(val => {
    result.style.color = '#F44336'
    result.textContent = val
  })
}

function validate(text) {
  const BR_GOOD = /<br \/>/g
  const BR_WITH_CLOSE = /<br(|  +)\/>/g
  const BR_OPEN = /<br *>/g
  const BR_CLOSE = /<\/br *>/g

  br_goods = text.match(BR_GOOD)
  br_with_closes = text.match(BR_WITH_CLOSE)
  br_opens = text.match(BR_OPEN)
  br_closes = text.match(BR_CLOSE)

  if (br_opens) {
    return Promise.reject('閉じない br タグが含まれています。<br /> を使いましょう。')
  }
  if (br_closes) {
    return Promise.reject('br の閉じタグが含まれています。<br /> を使いましょう。')
  }
  if (br_with_closes) {
    return Promise.reject('br の後のスペースは一つにしましょう。')
  }
  if (br_goods) {
    return Promise.resolve('素晴らしいです。これからも <br /> を使いましょう！')
  }
  return Promise.resolve('br タグが含まれていません。')
}

const mentors = [
  {
    id: 1,
    username: 'mentor1'
  },
  {
    id: 2,
    username: 'mentor2'
  }
]

export const fetchMentors = () => {
  return new Promise(function (resolve) {
    // setTimeoutを利用して１秒の遅延を発生させ、その直後にmentorsを渡す。
    setTimeout(() => {
      resolve(mentors)
    }, 1000)
  })
}

export const fetchMentorsWithfailure = () => {
  return new Promise(function (resolve, reject) {
    // setTimeoutを利用して１秒の遅延を発生させ、その直後にmentorsを渡す。
    setTimeout(() => {
      // 0-9の間の数字をランダムで得る。
      const ranNum = Math.floor(Math.random() * 10)
      if (ranNum > 8) {
        resolve(mentors)
      } else {
        reject({ success: false, message: 'エラーが発生しました。'})
      }
    }, 1000)
  })
}
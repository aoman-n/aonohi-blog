interface userInfoTypes {
  name: string,
  nickname: string,
  avatarUrl: string,
  githubUrl: string,
  twitterUrl: string
}

interface blogInfo {
  url: string,
  title: string,
}

export const userInfo: userInfoTypes = {
  name: 'Hiroaki Aoba',
  nickname: 'aohiro',
  avatarUrl: 'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
  githubUrl: 'https://github.com/laster18',
  twitterUrl: 'https://twitter.com/aohiro01',
}

export const blogInfo: blogInfo = {
  title: 'Aonohi Blog',
  url: 'http://localhost:8000/',
}
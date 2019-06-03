interface UserInfoTypes {
	avatarUrl: string
	githubUrl: string
	name: string
  nickname: string
  twitterName: string
	twitterUrl: string
}

interface BlogInfo {
  description: string
	url: string
	title: string
}

export const userInfo: UserInfoTypes = {
	avatarUrl: 'https://s3-ap-northeast-1.amazonaws.com/aohiro-blog/User/avatar/dot.jpg',
	githubUrl: 'https://github.com/laster18',
	name: 'Hiroaki Aoba',
  nickname: 'aohiro',
  twitterName: 'aohiro',
	twitterUrl: 'https://twitter.com/aohiro01',
}

export const blogInfo: BlogInfo = {
  description: 'Webエンジニアの技術ブログ',
	title: 'Aonohi Blog',
	url: 'https://aonohi.com',
	// url: 'http://localhost:8000/',
}

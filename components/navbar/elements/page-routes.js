import Link from 'next/link'

const PageRoutes = () => (
  <div style={{paddingRight: 10}}>
    <Link href="/">
      <a>Jumbotron</a>
    </Link>
    <Link href="/home">
      <a>Home</a>
    </Link>
  </div>
)

export default PageRoutes
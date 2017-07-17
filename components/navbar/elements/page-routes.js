import Link from 'next/link'

const PageRoutes = () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/knowledge">
      <a>Knowlege</a>
    </Link>
    <Link href="/skills">
      <a>Skills</a>
    </Link>

    <style jsx>
      {`
        div {
          width: 50vw;

          align-items: center;
          display: flex;
          justify-content: space-around;
        }

        a {
          color: black;
          text-decoration: none;
        }

        a:visited {
          text-decoration: none;
        }
      `}
    </style>

  </div>
)

export default PageRoutes
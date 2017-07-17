import PageRoutes from './elements/page-routes'

const Navbar = () => (
  <nav>
    <PageRoutes />

    <style jsx>
      {`
        nav {
          bottom: 0;
          padding-bottom: 1em;
          padding-top: 1em;
          position: absolute;

          height: auto;
          width: 100vw;

          align-items: center;
          display: flex;
          justify-content: center;

          font-size: 3vmin;

          zindex: 1;
        }
      `}
    </style>

  </nav>
)

export default Navbar
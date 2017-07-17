import PageRoutes from './elements/page-routes'
import Title from './elements/title'

const navStyle = {
  height: 'auto',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  zIndex: '1'
}

const Navbar = () => (
  <nav style={navStyle}>
    <Title />
    <PageRoutes />
  </nav>
)

export default Navbar
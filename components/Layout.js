import Jumbotron from '../components/jumbotron/Jumbotron'
import Navbar from './navbar/Navbar'

const layoutStyle = {
  margin: 0,
  padding: 0,
  height: '100vh',
  width: '100vw',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Jumbotron />
    {props.children}
    <Navbar />
    
    <style jsx global> 
      {`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    </style>

  </div>
)

export default Layout
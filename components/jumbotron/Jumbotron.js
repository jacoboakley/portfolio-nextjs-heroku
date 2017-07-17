
import Links from './elements/links'
import Title from './elements/title'

const jumbotronStyle = {
  margin: '0',
  padding: '0',

  height: '30vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  background: 'url("../../static/assets/images/night.png")',
  backgroundSize: '100% 125%',

  imageRendering: 'pixelated',
}

const Jumbotron = () => (
  <div style={jumbotronStyle}>
    <Title />
    <Links />
  </div>
)

export default Jumbotron
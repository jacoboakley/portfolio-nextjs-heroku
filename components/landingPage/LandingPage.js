import Avatar from '../shared/Avatar'
import Button from './elements/button'
import Links from './elements/links'
import Title from './elements/title'

const jumbotronStyle = {
  margin: '0',
  padding: '0',

  height: '100vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  background: 'url("../../static/assets/images/night.png")',
  backgroundSize: '100% 100%',

  imageRendering: 'pixelated',
}

const Jumbotron = () => (
  <div style={jumbotronStyle}>
    <Avatar />
    <Title />
    <Links />
    <Button />
  </div>
)

export default Jumbotron
import Avatar from '../shared/Avatar'
import Button from './elements/button'
import Links from './elements/links'
import Title from './elements/title'

const landingPageStyle = {
  position: 'absolute',
  margin: '0',
  padding: '0',

  height: '100vh',
  width: '100vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  zIndex: 1,
}

const LandingPage = () => (
  <div style={landingPageStyle}>
    <Avatar />
    <Title />
    <Links />
    <Button />
  </div>
)

export default LandingPage
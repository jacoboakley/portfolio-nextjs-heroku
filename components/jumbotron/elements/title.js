import Link from 'next/link'

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',

  color: 'white'
}

const Title = () => (
  <div style={titleStyle}>
    <Link href="/">
    <p style={{fontSize: '6vmin', margin: '0', cursor: 'pointer'}}>
      <strong>Jacob Oakley</strong>
    </p>
    </Link>
    <p style={{fontSize: '3vmin', textShadow: '3px 3px 0 #8a0099'}}>
      Frontend Web Developer /<br/>
      Netflix Binge Watcher
    </p>
  </div>
);


export default Title;
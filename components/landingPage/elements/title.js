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
    <p style={{fontSize: '8vmin', margin: '0'}}>
      <strong>Jacob Oakley</strong>
    </p>
    <p style={{fontSize: '6vmin', textShadow: '3px 3px 0 #8a0099'}}>
      Frontend Web Developer /<br/>
      Netflix Binge Watcher
    </p>
  </div>
);


export default Title;
import Layout from '../components/Layout'

const KnowledgeStyle = {
  padding: '0',
  margin: '0',

  height: 'auto',
  width: '100vw',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'justify',

  fontSize: '3vmin',
}

const ParagraphStyle = {
  width: '50vw',

  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const Knowledge = () => (
  <Layout>
    <div style={KnowledgeStyle}>
      <div style={ParagraphStyle}>
        <h1>What I know</h1>
        <p>
          Here is where I am supposed to impress you with my wealth of knowledge. I have learned three things so far.
        </p>
        <ol>
          <li>There is always more to learn.</li>
          <li>Someone knows more than you.</li>
          <li>If you don't know it, Google it</li>
        </ol>
      </div>
    </div>
  </Layout>
);


export default Knowledge;
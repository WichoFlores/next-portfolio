import Layout from '../components/Layout'

export default ({ status }) => (
  <Layout title="Error">
    { status ? 
      <p>{`Status ${status} when fetching data`}</p>
      :  
      <p>Couldn't find that page!</p>
    }
    </Layout>
)
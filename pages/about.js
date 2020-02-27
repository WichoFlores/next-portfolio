import Layout from '../components/Layout'
import 'isomorphic-fetch'
import Error from './_error'

const About = (props) => {

  const { user, status } = props

  if (status) {
    return <Error status={status}/>
  }
  // UseEffect executes on client side
  // useEffect(() => {
  //   fetch("https://api.github.com/users/WichoFlores")
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data)
  //     })
  // }, [])

  return (
    <Layout>
      <p>{ user.name }</p>
      <img src={user.avatar_url} alt="me" height="200"></img>
    </Layout>
  )
}

About.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/users/WichoFlores")
  const status = res.status > 205 ? res.status : false 
  const json = await res.json()
  return {
    user: json,
    status
  }
}

export default About
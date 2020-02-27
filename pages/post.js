import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p
      style={{width: "80vw" }}     
    > 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare ornare egestas. Praesent nisi tortor, posuere at lobortis ut, sagittis vitae nisi. Vestibulum massa arcu, aliquet sit amet tincidunt eu, ornare nec sem. Vivamus dignissim venenatis ultricies. Aliquam porta ipsum eget odio pretium ultrices. Aliquam erat volutpat. Maecenas metus ex, tincidunt dignissim iaculis eget, feugiat id odio. Vestibulum efficitur tortor sapien, ac tincidunt massa finibus eget. Sed faucibus vel orci non facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vestibulum vehicula metus, a pretium sapien iaculis in. Sed neque diam, porttitor at volutpat eget, consequat quis mi. Integer pellentesque, mauris sit amet tincidunt luctus, velit leo commodo risus, ac tempor ex orci in magna.</p>
  </Layout>
)

export default withRouter(Post)
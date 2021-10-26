import { CreatedLink } from '../components/CreatedLink'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

export default function Home() {
  return(
    <>
    <Header />
      <Layout title="ShortKy">
        <Form />
        <CreatedLink />
      </Layout>
    </>
  )
}


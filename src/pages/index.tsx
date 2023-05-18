import { GetServerSideProps } from "next";
import { usePageQuery, PageDocument } from "../generated/graphql"
import { client, ssrCache } from "../lib/urql"

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'post-one',
    }
  })

  return (
    <>
      <h1>{data?.page?.title}</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: 'post-one' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}
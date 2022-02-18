import { usePageQuery, PageDocument } from "../generated/graphql"

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'post-one'
    }
  })

  return (
    <>
      <h1>{data?.page?.title}</h1>
    </>
  )
}
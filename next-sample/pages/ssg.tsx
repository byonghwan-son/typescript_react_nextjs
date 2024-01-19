import { NextPage } from "next"
import Head from "next/head"

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Head 컴포넌트로 감싸면 그 요소는 <head>태그에 배치된다. */}
      <Head>
        <title>Static Site Gneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
        </p>
      </main>
    </div>
  )
}

export default SSG
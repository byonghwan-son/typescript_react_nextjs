import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {

  const { id } = props
  const router = useRouter()

  if(router.isFallback) {
    // 폴백 페이지용 표시를 반환한다.
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
        </p>
        <p>{`/posts/${id}에 대응하는 페이지 입니다.`}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths =async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]
  return { paths, fallback: false };
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> =async (context) => {
  // const timestamp = new Date().toLocaleString();
  // const message = `${timestamp}에 getStaticProps가 실행됐습니다.`
  // console.log(message);
  // console.log(context);
  return {
    props: {
      /*
      ! : Null이 아닌 어선셜 연산자(Non-null assertion operator) 
      또는 확정 할당 어선셜(Definite Assignment Assertions) 
      */
      id: context.params!['id'],
    }
  }
}

export default Post
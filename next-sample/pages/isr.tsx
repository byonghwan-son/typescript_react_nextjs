import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import {useRouter} from "next/router";

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const {message} = props

  const router = useRouter()

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title></title>
        <link rel={`icon`} href={`/favicon.ico`} />
      </Head>
      <p>
        이 페이지는 ISR 을 통해 빌드 시 생성된 페이지입니다.
      </p>
      <p>{message}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timeStamp = new Date().toLocaleString()
  const message = `${timeStamp}에 이 페이지의 getStaticProps 가 실행됐습니다.`
  console.log(message)
  console.log(context)
  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default ISR
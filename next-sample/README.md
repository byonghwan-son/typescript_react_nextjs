This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js 렌더링 방법

- 정적 사이트 생성(SSG: Static Site Generation). 이 소스에서는 정적 사이트(Static)도 SSG에 포함시킴
- 클라이언트 사이드 렌더링(CSR: Client Side Rendering)
- 서버 사이드 렌더링(SSR: Server Side Rendering)
- 점진적 정적 재생성(ISR: Incremental Static Regeneration)

모든 페이지에서 사전 렌더링이 가능한 부분은 사전 렌더링을 수행함.

## 페이지와 렌더링 방법

### Next.js의 페이지와 데이터 취득

|종류|데이터 취득에 사용하는 함수|데이터 취득 시점|보충설명|
|-|-|-|-|
|SSG|getStaticProps|빌드 시(SSG)|데이터 취득을 전혀 수행하지 않는 경우도 SSG에 해당|
|SSR|getServerSideProps|사용자 요청 시(서버 사이드)|getInitialProps를 사용해도 SSR|
|ISR|revalidate를 반환하는<br>getStaticProps|빌드 시(ISR)|ISR은 배포 후에도 백그라운드 빌드가 실행된다.|
|CSR|그 밖의 임의의 함수(useSWR 등)|사용자 요청 시(브라우저)|CSR은 SSG/SSR/ISR과 동시에 사용 가능|




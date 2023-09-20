import Head from 'next/head';
import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import { Info } from '@/types/info';
import { useEffect } from 'react';
import useInfo from '@/hooks/useInfo';
import { NextSeo } from 'next-seo';

type HomeProps = {
  infos: Info[];
};

export default function Home({ infos }: HomeProps) {
  // 위경도에 대한 정보(.json) 및 naver 의 map 객체를 전역으로 참조해서
  // SWR 상태관리 ()
  const { initializeInfos } = useInfo();

  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
    /* 새로운 정보가 들어온다면 다시 렌더링 */
  }, [initializeInfos, infos]);

  return (
    <>
      <Head>
        <title>건강증진센터 위치 서비스</title>
        <meta name="description" content="건강증진센터 위치 서비스" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo title="건강검진센터 위치" description="건강검진센터 위치 서비스입니다." />
      <Header />
      <MapScene />
    </>
  );
}

// pre-rendering 해서 SSG 생성
export const getStaticProps = async () => {
  const infos = (await import('@/public/data.json')).default;
  return {
    props: { infos },
    // revalidate: 3600,
  };
};

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import MiniDrawer from '@components/SideBar';
import Content from '@components/Content';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { pathTitles } from '@utils/paths';
import colors from '@utils/colors';
import { SectionsContent } from './getSectionsContnet';

const Home = () => {
  const [currentPash, setCurrentPath] = useState<string>();
  const [loadingPash, setLoadingPash] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (router?.query?.id) {
      setCurrentPath(router.query.id[0]);
      setLoadingPash(false);
    } else if (router?.query) {
      router.push(`/home/dashboard`);
      setLoadingPash(false);
    }
  }, [router]);

  if (loadingPash) {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          padding: 0,
          background: colors.light4,
        }}
      />
    );
  }

  const selectedContent = SectionsContent[currentPash];

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        padding: 0,
        background: colors.light4,
      }}
    >
      <MiniDrawer />

      <Content>
        {currentPash && selectedContent({ title: pathTitles[currentPash] })}
      </Content>
    </div>
  );
};

export default Home;

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import MiniDrawer from '@components/molecules/SideBar';
import Content from '@components/molecules/Content';
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

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        padding: 0,
        background: colors.light4,
        overflowY: 'auto',
        paddingBottom: '60px',
      }}
    >
      <MiniDrawer />

      <Content>
        {currentPash &&
          SectionsContent({
            path: currentPash,
            title: pathTitles[currentPash],
          })}
      </Content>
    </div>
  );
};

export default Home;

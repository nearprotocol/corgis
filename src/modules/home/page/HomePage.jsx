import React, { useContext } from 'react';

import './HomePage.scss';

import { ContractContext, NearContext } from '~contexts';

import { Poster } from '~modules/home/components';
import { CorgisShowCase } from '~modules/common';

const HomePage = () => {
  const { user, signIn } = useContext(NearContext);
  const { globalCorgis } = useContext(ContractContext);

  const requestSignIn = () => {
    signIn();
  };

  return (
    <div className='home'>
      <Poster requestSignIn={requestSignIn} user={user} />

      <div className='home__showcase'>
        <CorgisShowCase corgis={globalCorgis} title='Recent activity' />
      </div>
    </div>
  );
};

export default HomePage;

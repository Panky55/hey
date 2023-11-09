import WalletSelector from '@components/Shared/Login/WalletSelector';
import { APP_NAME } from '@hey/data/constants';
import type { FC } from 'react';
import { useState } from 'react';

const Login: FC = () => {
  const [hasConnected, setHasConnected] = useState(false);

  return (
    <div className="p-5">
      <div className="space-y-5">
        {hasConnected ? (
          <div className="space-y-1">
            <div className="text-xl font-bold">Please sign the message.</div>
            <div className="ld-text-gray-500 text-sm">
              {APP_NAME} uses this signature to verify that you're the owner of
              this address.
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="text-xl font-bold">Connect your wallet.</div>
            <div className="ld-text-gray-500 text-sm">
              Connect with one of our available wallet providers or create a new
              one.
            </div>
          </div>
        )}
        <WalletSelector setHasConnected={setHasConnected} />
      </div>
    </div>
  );
};

export default Login;

import { IS_MAINNET } from './constants';

export const VerifiedOpenActionModules = {
  Swap: IS_MAINNET
    ? '0xE7f3DB2a0837b16a23DFF5E2Bc4303Ea94b34E7F'
    : '0x8a3fFD86C4409Eb3c3b94DCC5219024CCf6C6179',
  Tip: IS_MAINNET
    ? '0x22cb67432C101a9b6fE0F9ab542c8ADD5DD48153'
    : '0x6111e258a6d00d805DcF1249900895c7aA0cD186'
};

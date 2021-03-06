export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 19200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 1.5;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  97: {
    DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    OHM_ADDRESS: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
    STAKING_ADDRESS: "0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SOHM_ADDRESS: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
    WSOHM_ADDRESS: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
    OLD_SOHM_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  19: {
    DAI_ADDRESS: "0x70Ad7172EF0b131A1428D0c1F66457EB041f2176", // duplicate
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    HEC_ADDRESS: "0xdf8c63B426515D9318256b54a72B388950f2A5dE",
    STAKING_ADDRESS: "0xd534e7B59b01CD12289C8bed1f4c48C57Cab1569", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x087415f6be75bB3e97Af87942AE3C1130354B984", // Helper contract used for Staking only
    OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40", //#
    OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146", //#
    SHEC_ADDRESS: "0x99C960cb91144C2164E7e9B70B46E26C50711c86",
    OLD_SHEC_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106", //#
    MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d", //#
    DISTRIBUTOR_ADDRESS: "0xB2041A4Da96D3E78F21FB31D9428744C031D7E76", //#
    BONDINGCALC_ADDRESS: "0xf78f8b90E998f6Cd4298AEC09E7b2F3f2E514413",
    BONDINGCALC_ADDRESS1: "0xf78f8b90E998f6Cd4298AEC09E7b2F3f2E514413", //#
    TREASURY_ADDRESS: "0xB5C2029940730a1a4bb410251E87A9804142cc67",
    REDEEM_HELPER_ADDRESS: "0xb507Db6a5A5bf430f3A074Cd6F6EB4Edb6E5D083",
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // #  33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // #  NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", //#   NEW
  },
};

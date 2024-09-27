import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

(async () => {
  const umi = createUmi(
    "https://mainnet.helius-rpc.com/
  ).use(dasApi());

  const assets = umi.rpc.getAss;
})();

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone cruise pave cluster half praise army gas'; 
let testAccounts = [
"0x571dc5900b091498d41ba3082f080c4fa69aaefd29291e7c5bc7214152b13ae4",
"0xf334fd8931d32e54d8cd71fd78f3409fa8d0b0a65aaf18192b2aba26dd3c41c4",
"0x258992639acedd98ddc3f87c80bb789dd67594bd977ac4c5a0a1d8dea07a4238",
"0x8695e350c15d7571e8b96ddf725b10d1a791ffaf0126f1671541a7eb41e10292",
"0xd89dcdfaf4596956adf38fa914059916f6ab49cbb1457381c1736bedfe885f24",
"0x037e43640238db8c97a9b7277cd7f03d478814845da75631ffa4b353e7508846",
"0xf0c950267a362051c17a8666e8bac65f67537819aaa75c6af0c40869d2e40e3c",
"0x386ce97da57d180bee2a6108a9023df8290542def784e9576ccf90612cf11768",
"0x35c676801da966cebcc3c70e300237026218e47256b28ab5d537a2135eecba5e",
"0xd834a46dadbe887a3402a87cffe98fcb09273b7ac3b501d53debffb1b904d244"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth still assume give clip slot gesture'; 
let testAccounts = [
"0x2cca72a418f6e2537a9fdbc332a11ad0df35902ae6f248c1636a811b121ba7e9",
"0xdae31f301e55ea6e134231bb00aafda87a68adc460f461e2307eb369554c56d9",
"0xb7f2b470ec95c5ca4117cf52fc27e713cb556cfef57018217547890ba9b3e6c6",
"0x3dfce5d813ef59145a2d4cc087d6258485b5a39dd065c216895071f361c2c206",
"0xd15ffac9218025b19ed5381e8383455d19deaa7cc75c8d313d09fac807260dba",
"0x7a232e56e1ae6fc26ccc317b4d8cd7dd3512897487d03e898f5a8fb24809f3dc",
"0xbb5dcb629366b7c4cf73f3062040b339d19bd5b74835c00f0c25b1a03051233b",
"0x452c18dede91be4a7fb85fc26e06b5561b5cf803b0a749a602279f1c7a43e315",
"0x872ace63e07269bb17780ecf90b8346b3d62e024bcc7d11d44cb7edd2095e73f",
"0x6736385bbd0aae1b643702e05dc116caaacbed66927210e7742b59096d91e66c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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

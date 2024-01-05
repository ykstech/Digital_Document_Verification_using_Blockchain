const contractAddress = "0x6E5C4acEFD969216a4b3B068Bad6144f1a4182AA";
 const contractAbi = 
 [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"message","type":"address"}],"name":"LogAddressPrint","type":"event","signature":"0xf5cd562a8c1c6e008d6f406c71229844c575d31ec8f589e1ff43219d50e9b449"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"LogPrint","type":"event","signature":"0x894570b4cbd952cb1af656ba8df9c5f7785370e07bdc03173d6290b8feb6e234"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x893d20e8"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"string","name":"ipfsHash","type":"string"},{"internalType":"address","name":"universityAddress","type":"address"}],"name":"uploadDocument","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x1fe5994b"},{"inputs":[{"internalType":"string[][]","name":"data","type":"string[][]"},{"internalType":"address[]","name":"studentAddressList","type":"address[]"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"uploadDocumentnVerify","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x90cc84e0"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"string","name":"oldipfsHash","type":"string"},{"internalType":"string","name":"newipfsHash","type":"string"}],"name":"verifyDocument","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5526e6e4"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"string","name":"newipfsHash","type":"string"}],"name":"unverifyDocument","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5cba100d"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"address","name":"companyAddress","type":"address"}],"name":"includeCompany","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x2bbfef89"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"address","name":"companyAddress","type":"address"}],"name":"removeCompany","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xdb5e842b"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"}],"name":"checkStatus","outputs":[{"internalType":"string[2]","name":"","type":"string[2]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x44b0a995"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"},{"internalType":"string","name":"newipfsHash","type":"string"}],"name":"checknverify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xe1a3e647"},{"inputs":[],"name":"registerCompany","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x7cad1107"},{"inputs":[{"internalType":"address","name":"companyAddress","type":"address"}],"name":"verifyCompany","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xf592146d"},{"inputs":[{"internalType":"address","name":"companyAddress","type":"address"}],"name":"unverifyCompany","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xec6614e2"},{"inputs":[],"name":"addUniversity","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x13a65808"},{"inputs":[{"internalType":"address","name":"universityAddress","type":"address"}],"name":"verifyUniversity","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x877af465"},{"inputs":[{"internalType":"address","name":"universityAddress","type":"address"}],"name":"removeUniversity","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x28f54b2f"},{"inputs":[],"name":"getAllUniversityAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb9b3bb36"},{"inputs":[],"name":"getAllCompanyAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8b999def"},{"inputs":[{"internalType":"address","name":"universityAddress","type":"address"}],"name":"checkUniversity","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x3308a90f"},{"inputs":[{"internalType":"address","name":"companyAddress","type":"address"}],"name":"checkCompany","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xb77553b6"},{"inputs":[],"name":"getUniversityDocumentList","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcd89b936"},{"inputs":[],"name":"getStudentDocumentList","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xab9db63f"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"}],"name":"getDocumentCompanyList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd7d8115a"},{"inputs":[{"internalType":"string","name":"uniqueId","type":"string"}],"name":"getDocumentDetails","outputs":[{"internalType":"string[2]","name":"","type":"string[2]"},{"internalType":"address[2]","name":"","type":"address[2]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xd29352db"}];

      export { contractAddress, contractAbi };
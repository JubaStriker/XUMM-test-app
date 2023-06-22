const { XummSdk } = require('xumm-sdk');


const api_key = "2a97b0b3-cc30-48be-8129-45c7f5985721"
const api_secret = "f7952171-6134-4dca-b6e6-19f7e60dc406"

const xumm = new XummSdk(api_key, api_secret);

const main = async () => {

    const request = {
        // txjson: {
        //     Account: "rNzHuiEJetmercrQ33UZi5BLA1pNo2cykx",
        //     NFTokenSellOffer: "34A29A872AF29A4564E98F87F2019EAE91AECCB4F5D373D40C5316B55C01EE63",
        //     TransactionType: "NFTokenMint",
        //     TransferFee: 1,
        //     NFTokenTaxon: 0,
        //     Flags: 8,
        //     URI: "697066733A2F2F62616679626569676479727A74357366703775646D37687537367568377932366E6634646675796C71616266336F636C67747179353566627A6469",
        // }
        txjson: {
            TransactionType: "NFTokenCreateOffer",
            Account: "rNzHuiEJetmercrQ33UZi5BLA1pNo2cykx",
            NFTokenID: "00080000996F7636107365C8BE51C439F371C1C4D31C552F2DCBAB9D00000002",
            Amount: "0",
            Flags: 1,
            Destination: "rNPPJe3wEoHxxfmxSRgcuVe8Hu2AFhRzfe"
        }

    }

    const payload = await xumm.payload.create(request, true);
    console.log(payload)
};


main();
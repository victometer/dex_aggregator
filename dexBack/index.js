const express = require("express");
const Moralis = require("moralis").default;
// Moralis.initialize("97c83f1f-544b-4b67-bc9b-3ab1720b26aa")
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {

  const {query} = req
  // console.log(query) //an object with the 2 addresses below

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne
  })
  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo
  })

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice/responseTwo.raw.usdPrice
  }
  
  return res.status(200).json(usdPrices);
});


Moralis.start({
  apiKey:process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});

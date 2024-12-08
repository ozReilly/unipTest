import { btcInfo } from "./coins/BTC.js";
// import { ethInfo } from "./coins/ETH.ts";
// import { tronInfo } from "./coins/TRON.ts";
// import { xrplInfo } from "./coins/XRPL.ts";
// import {xrplInfo} from './coins/XRPL.ts'
const init = (mnc) => {
    console.log('init -tools :::::');
   const btc =  btcInfo(mnc)
//    const eth = ethInfo(mnc)
//    const tron = tronInfo(mnc)
//    const xrpl = xrplInfo(mnc)
    return {
        btc,
        // eth,
        // tron,
        // xrpl
    }
}
export {init}
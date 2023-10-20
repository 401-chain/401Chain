const apis = require("./apis");

export function padEmail(email){
    return apis.padString(emailAddr, 256);
}
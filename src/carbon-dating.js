const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if (!sampleActivity || typeof sampleActivity !== "string" || !Number.parseInt(sampleActivity) || Number.parseInt(sampleActivity) < 0 || Number.parseInt(sampleActivity) === 0 || Number.parseInt(sampleActivity) >= 15) return false;

    const k = 0.693 / HALF_LIFE_PERIOD;
    const age = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
    return Math.ceil(age);

};

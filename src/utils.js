const PHONE = '+91 79995 84503';
const PHONE_RAW = '+917999584503';

export function copyPhone(showToast) {
  navigator.clipboard
    .writeText(PHONE_RAW)
    .then(() => showToast(`${PHONE} copied to clipboard!`))
    .catch(() => {});
}

export { PHONE };

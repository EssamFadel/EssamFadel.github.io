const fs = require('fs');
const QRCode = require('qrcode');

const destination = 'https://essamfadel.github.io/';

QRCode.toString(destination, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  color: { dark: '#101412', light: '#f4f3ed' },
  margin: 1,
  width: 720
}).then(svg => fs.writeFileSync('src/assets/essam-fadel-qr.svg', svg));

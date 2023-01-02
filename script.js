const qrcodeEl = document.getElementById('qrcode');
const qr = document.getElementById('qr');
const textEl = document.getElementById('text');
const generateEl = document.getElementById('generate');
const widthEl = document.getElementById('width');
const heightEl = document.getElementById('height');
const darkEl = document.getElementById('dark');
const lightEl = document.getElementById('light');
const downloadEl = document.getElementById('download');

generateEl.addEventListener('click', generate);


function generate() {
    qrcodeEl.innerHTML = ``;
    new QRCode(qrcodeEl, {
        text: textEl.value,
        width: widthEl.value,
        height: heightEl.value,
        colorDark: darkEl.value,
        colorLight: lightEl.value
    });

    download();
}

function download() {
    const downloadEl = document.getElementById('download');
    const canvasEl = qrcodeEl.querySelector('canvas');
    let data = canvasEl.toDataURL('image/png');

    qr.style.display = 'inline-block';
    downloadEl.setAttribute('href', data);
    downloadEl.setAttribute('download', 'qrcode.png');
    downloadEl.style.display = 'inline-block';
}


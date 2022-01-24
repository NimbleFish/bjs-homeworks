const hexToRGB = hex => new Object({ r: (parseInt(hex, 16) >> 16) & 255, g: (parseInt(hex, 16) >> 8) & 255, b: parseInt(hex, 16) & 255 });

export default function getRGB(form) {
    let result = null;
    const a = hexToRGB(form.substr(1));
    if (form !== '#000000' && a.r === 0 && a.g === 0 && a.b === 0) result = 'ERROR'; // отслеживание ошибки
    else {
        document.body.style.backgroundColor = `rgb(${a.r}, ${a.g}, ${a.b})`;
        result = `rgb(${a.r}, ${a.g}, ${a.b})`;
    }
    return result;
}
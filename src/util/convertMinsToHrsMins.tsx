export default function convertMinsToHrsMins(min: number) {
    let h = Math.floor(min / 60);
    let m = min % 60;
    let hour = h < 10 ? h : h;
    let minutes = m < 10 ? 0 + m : m;
    return `${hour}:${minutes}`;
}

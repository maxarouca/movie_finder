export default function formatToMoney(number: number) {
    return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

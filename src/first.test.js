const products = [
    {id: 1, product: 'Laptop', price: 7200},
    {id: 2, product: 'Headphones', price: 6000},
    {id: 3, product: 'Mouse', price: 2000},
    {id: 4, product: 'keyboard', price: 4200},
    {id: 5, product: 'desktop', price: 10800},
];

const q1 = () => products.sort((a, b) => b.price - a.price);
const q2 = () => products.filter(e => e.price >= 6000).map(e => e.product);

describe('wanted 04', () => {
    test('price가 높은 순으로 정렬된 List를 반환하는 함수를 작성해주세요.', () => {
        expect(q1()).toEqual([
            {id: 5, product: 'desktop', price: 10800},
            {id: 1, product: 'Laptop', price: 7200},
            {id: 2, product: 'Headphones', price: 6000},
            {id: 4, product: 'keyboard', price: 4200},
            {id: 3, product: 'Mouse', price: 2000},
        ]);
    });
    test('price가 6000 이상인 제품들의 인덱스를 찾아, 해당 제품들의 이름을 배열로 반환하는 함수를 작성해주세요', () => {
        expect(q2()).toContain('desktop', 'Laptop', 'Headphones');
    });
})
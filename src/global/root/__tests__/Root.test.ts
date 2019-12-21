import { DOMAIN } from '../Root';

it("Base URL has 'http' as prefix and '/' as suffix ", () => {
    const prefix: string = DOMAIN.slice(0, 4);
    const suffix: string = DOMAIN.charAt(DOMAIN.length - 1);
    expect(prefix).toStrictEqual('http');
    expect(suffix).toStrictEqual('/');
});
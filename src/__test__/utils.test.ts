import { objShallowCompare, getDegree, getLocaleString } from '../utils';

describe('util 얕은 비교 함수 검증', () => {
  const origin = {
    firstName: 'jiyong',
    lastName: 'kim',
  };
  it('같은 value들을 갖는 오브젝트 비교', () => {
    const compObj = {
      firstName: 'jiyong',
      lastName: 'kim',
    };
    expect(objShallowCompare(origin, compObj)).toBeTruthy();
  });
  it('다른 value들을 갖는 오브젝트 비교', () => {
    const compObj = {
      firstName: 'seven',
      lastName: 'two',
    };
    expect(objShallowCompare(origin, compObj)).not.toBeTruthy();
  });
});

describe('util getDegree 함수 검증', () => {
  it('비어있는 clock object가 인자로 넘어갈 시 원소가 0인 배열을 출력', () => {
    const result = getDegree(null);
    expect(result).toMatchObject([0, 0, 0]);
  });
  it('7시 00분 00초의 각도', () => {
    const expectedResult = [210, 0, 0];
    const result = getDegree({ hour: 7, minute: 0, second: 0 });
    expect(result).toMatchObject(expectedResult);
  });
  it('오전과 오후의 각도가 동일', () => {
    const before = getDegree({ hour: 5, minute: 10, second: 11 });
    const after = getDegree({ hour: 17, minute: 10, second: 11 });
    expect(after).toMatchObject(before);
  });
});

describe('util getLocaleString 함수 검증', () => {
  it('오전 검증', () => {
    const result = getLocaleString({ hour: 0, minute: 0, second: 0 });
    expect(result).toMatch('오전 12시 00분 00초');
  });
  it('오후 검증', () => {
    const result = getLocaleString({ hour: 14, minute: 0, second: 1 });
    expect(result).toMatch('오후 2시 00분 01초');
  });
});

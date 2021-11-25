import { objShallowCompare } from '../utils';

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

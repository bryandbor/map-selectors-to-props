import {createSelectorMapper} from '../map-selectors-to-props';

describe('createSelectorMapper', () => {
  it('maps Redux state through selectors correctly', () => {
    const selectorMap = {
      abc: jest.fn().mockReturnValue('abc selector value'),
      mno: jest.fn().mockReturnValue('mno selector value'),
      xyz: jest.fn().mockReturnValue('xyz selector value'),
    };

    let mapper;
    expect(() => (mapper = createSelectorMapper(selectorMap))).not.toThrow();

    const state = {
      key: 'value',
    };
    const ownProps = {
      disabled: true,
    };

    let mappedState;
    expect(() => (mappedState = mapper(state, ownProps))).not.toThrow();

    expect(mappedState).toEqual({
      abc: 'abc selector value',
      mno: 'mno selector value',
      xyz: 'xyz selector value',
    });

    Object.values(selectorMap).forEach(mock =>
      expect(mock).toHaveBeenCalledWith(state, ownProps)
    );
  });
});

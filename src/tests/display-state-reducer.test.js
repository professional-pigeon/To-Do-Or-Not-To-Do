import displayStateReducer from "../reducers/display-state-reducer";

describe('displayStateReducer', () => { 

  test('Should return default state if there is no action type passed into the reducer', 
  ()=> {
    expect(displayStateReducer({}, { type: null })).toEqual("default");
  });
});

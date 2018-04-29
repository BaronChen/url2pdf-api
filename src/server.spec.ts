import { MyApp } from './server';
import { expect } from 'chai';

describe('Server test', () => {
  it('my test', () => {
    let app = new MyApp();
    expect(app).is.not.null;
  });
});
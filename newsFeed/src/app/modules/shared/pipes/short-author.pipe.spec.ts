import { ShortAuthorPipe } from './short-author.pipe';

describe('ShortAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});

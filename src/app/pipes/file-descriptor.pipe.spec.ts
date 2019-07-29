import {FileDescriptorPipe} from './file-descriptor.pipe';

describe('FileDescriptorPipe', () => {
  it('create an instance', () => {
    const pipe = new FileDescriptorPipe();
    expect(pipe).toBeTruthy();
  });
});

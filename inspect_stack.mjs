import { Stack } from '@stackframe/stack';

const stack = new Stack({ projectId: 'mock-id' });
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(stack)));
console.log(Object.keys(stack));

function wrap<T>(value: T) {
  return { value };
}

const wrapped = wrap("hello");
console.log(wrapped.value);

const wrapped2 = wrap(123);
console.log(wrapped2.value);

// :)))
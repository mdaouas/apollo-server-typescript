// console.log('Hello World!');
console.log('foo bar');

// Hot Module Replacment
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}

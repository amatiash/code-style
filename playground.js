// @ts-check

function fn() {}
function foo(_o, _t, _tr) {}
function bar(_o, _t, _tr) {}
function baz(_o, _t, _tr) {}
fn()

function nop() {
    fn()
}

foo('one', 'two', 'three')
// or
foo(
    'one',
    'two',
    'three',
)

bar('one', 'two', {one: 1, two: 2})

baz('one', 'two', (x) => {
    console.log(x)
})

function * generator() {
    yield '44'
    yield '55'
}

generator()

const _f424 = (foo) =>
    'bar'

const _f425 = (_foo) =>
    ('bar')

const _f426 = (_foo) =>
    (_bar) =>
        baz

const _f427 = (_foo) =>
    (
        bar()
    )

const _f428 = (_foo) => (
    bar()
)

_f424()
_f425()
_f426()
_f427()

const f534 = true

if (f534) {
    console.log('foo')
}
else {
    // ...
}

var fooc = bar > baz ? (_f424 > _f425 ? 1 : 3) : 2

const funct42 = (a) => (~_f427() ? 2 : 3)

let a247
let b436
let c547

const x34634 = {z: 1}

const x34635 = `a string containing 'single' quotes`

for (let i = 0; i < 10; i++) {
    //
}

// --------------
// Comment block
// --------------

for (
    let i = 0;
    i < 10;
    ++i
) {
    foo()
}

const x45353 = 0

switch (x45353) {
    case 0: break
    default: foo()
}

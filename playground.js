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

bar('one', 'two', { one: 1, two: 2 })

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

_f424()
_f425()
_f426()
_f427()

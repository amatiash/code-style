// @ts-check

const Hello = (...args) => null

const component = () => {
    return (
        <>
            <Hello
                lastName="Smith"
                firstName="John"
                div={<div />}
            />

            <Hello
                active
                validate
                name="John"
                tel={5555555} />

            <Hello firstName="John" lastName="Smith" />
            <Hello
                firstName="John"
                lastName="Smith"
            />

        </>
    )
}

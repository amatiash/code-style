# code-style

## Notes

In `npx eslint .` we use `npx` in case `eslint` is not installed globally.

`braceStyle: 'stroustrup'` is used to create axtra space for readability:

```javascript
    // stroustrup
	// Less compact, but more human reabable
    if (axios.isAxiosError(error)) {
        handleAxiosError(req, error)
    }
    else if (error instanceof Stripe.errors.StripeError) {
        handleStripeError(req, error)
    }
    else if (error instanceof AppError) {
        handleAppError(req, error)
    }
    else {
        handleUnknownError(req, error)
    }
```
vs

```javascript
    // 1tbs
	// More compact, but less human reabable
    if (axios.isAxiosError(error)) {
        handleAxiosError(req, error)
    } else if (error instanceof Stripe.errors.StripeError) {
        handleStripeError(req, error)
    } else if (error instanceof AppError) {
        handleAppError(req, error)
    } else {
        handleUnknownError(req, error)
    }
```

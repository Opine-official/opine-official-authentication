# @opine-official/authentication

This is the authentication module for Opine, a simple npm module for verifying JWT tokens.

## Installation

```sh
npm install @opine-official/authentication
```

## Usage

```js
import { verifyToken } from "@opine-official/authentication";

const token = "your-jwt-token";
const secretKey = "your-secret-key";

try {
  const decoded = verifyToken(token, secretKey);
  console.log(decoded);
} catch (err) {
  console.error(err.message);
}
```

## API

`verifyToken(token: string, secretKey: string): any`

Verifies a JWT token.

- **token**: The JWT token to verify.
- **secretKey**: The secret key used to verify the token.

Returns the decoded payload if the token is valid, throws an Error otherwise.

## Repository

You can find the source code for this module on [GitHub]("https://github.com/Opine-official/opine-official-authentication.git").

## License

MIT

Remember to replace your-jwt-token and your-secret-key with actual values when using the module. You may also want to replace MIT with the actual license you're using, and add more sections as needed, such as Contributing, Tests, and Changelog.

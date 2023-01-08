# bytes-to-string
Converts a number of bytes to a string representation in kilobytes, megabytes, or gigabytes.

## Usage
```ts
import { bytesToString } from '@codineerdigital/bytes-to-string';

console.log(bytesToString(1024)); // Outputs: "1.00 KB"
console.log(bytesToString(1024 ** 2)); // Outputs: "1.00 MB"
console.log(bytesToString(1024 ** 3)); // Outputs: "1.00 GB"
```

## Api
```ts
function bytesToString(bytes: number): string
```

### Parameters
- `bytes`: The number of bytes to convert.
### Returns
A string representation of the number of bytes in kilobytes, megabytes, or gigabytes.

## Example
```ts
console.log(bytesToString(1024)); // Outputs: "1.00 KB"
console.log(bytesToString(1024 ** 2)); // Outputs: "1.00 MB"
console.log(bytesToString(1024 ** 3)); // Outputs: "1.00 GB"
```
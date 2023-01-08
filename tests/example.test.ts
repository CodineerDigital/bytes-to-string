import { bytesToString } from "..";

test('test the functionality of the conversion', () => {
    expect(bytesToString(0)).toBe("0 bytes");
    expect(bytesToString(1023)).toBe("1023 bytes");
    expect(bytesToString(1024)).toBe("1.00 KB");
    expect(bytesToString(1024 * 1024)).toBe("1.00 MB");
    expect(bytesToString(1024 * 1024 * 1024)).toBe("1.00 GB");
});
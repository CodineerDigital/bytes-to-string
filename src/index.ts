/**
 * Convert bytes to human readable string
 * @param bytes Number of bytes
 * @returns Human readable string
 */
export function bytesToString(bytes: number) {
    if (bytes < 1024) {
        return bytes + " bytes";
    } else if (bytes < 1024 ** 2) {
        return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1024 ** 3) {
        return (bytes / (1024 ** 2)).toFixed(2) + " MB";
    } else if (bytes < 1024 ** 4) {
        return (bytes / (1024 ** 3)).toFixed(2) + " GB";
    } else {
        return (bytes / (1024 ** 4)).toFixed(2) + " TB";
    }
}
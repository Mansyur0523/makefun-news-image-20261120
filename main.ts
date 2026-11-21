// news-image-20261120 — validate repo/entry.png and copy it byte-identically
// to $MAKEFUN_OUTPUT_DIR/entry.png (default /output). Node standard library only.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dest = join(outDir, "entry.png");

const buf = readFileSync(src);

// PNG signature check
const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(sig)) {
  throw new Error("entry.png is not a valid PNG");
}
if (buf.length > MAX_BYTES) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
// IHDR: width/height are big-endian uint32 at offsets 16/20
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, sides must be <= ${MAX_SIDE}`);
}
// PNG must end with a complete IEND chunk (12 bytes: length 0, "IEND", CRC)
const iend = buf.subarray(buf.length - 12);
if (iend.readUInt32BE(0) !== 0 || iend.toString("ascii", 4, 8) !== "IEND") {
  throw new Error("entry.png is truncated: missing IEND chunk");
}
const sha256 = createHash("sha256").update(buf).digest("hex");

mkdirSync(outDir, { recursive: true });
writeFileSync(dest, buf);
// read back and confirm the copy is byte-identical to the source
const back = readFileSync(dest);
if (!back.equals(buf)) {
  throw new Error("output entry.png differs from repo entry.png");
}
console.log(`copied ${width}x${height} entry.png (${buf.length} bytes, sha256 ${sha256}) -> ${dest}`);

# Node.js FS (File System) Module Commands

## ⚙️ Import Module
```js
const fs = require('fs'); // CommonJS
import fs from 'fs'; // ES Module
```

---

## 📝 FILE READ OPERATIONS

### 1. fs.readFile(path, [options], callback)
Reads a file asynchronously.
```js
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
---

### 2. fs.readFileSync(path, [options])
Reads a file synchronously.
```js
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
```
---

### 3. fs.createReadStream(path, [options])
Read large files as a stream.
```js
const stream = fs.createReadStream('largefile.txt', 'utf8');
stream.on('data', chunk => console.log(chunk));
```

---

## 💾 FILE WRITE OPERATIONS

### 4. fs.writeFile(path, data, [options], callback)
Writes or replaces data in a file asynchronously.
```js
fs.writeFile('output.txt', 'Hello World!', err => {
  if (err) throw err;
});
```
----

### 5. fs.writeFileSync(path, data, [options])
Synchronous file write.

----

### 6. fs.appendFile(path, data, [options], callback)
Appends data to a file asynchronously.
```js
fs.appendFile('log.txt', 'New log entry\n', err => {
  if (err) throw err;
});
```

---

### 7. fs.appendFileSync(path, data, [options])
Synchronous version of append.

---

### 8. fs.createWriteStream(path, [options])
Stream-based writing.
```js
const stream = fs.createWriteStream('output.txt');
stream.write('Chunk 1\n');
stream.end('Done');
```

---

## 📂 FILE / DIRECTORY MANAGEMENT

### 9. fs.rename(oldPath, newPath, callback)
Rename or move a file.

---

### 10. fs.unlink(path, callback)
Delete a file.

----

### 11. fs.rm(path, [options], callback)
Remove a file or directory.
```js
fs.rm('temp', { recursive: true, force: true }, err => {
  if (err) throw err;
});
```

---

### 12. fs.mkdir(path, [options], callback)
Create a new directory.

---

### 13. fs.mkdirSync(path, [options])
Synchronous version of mkdir.

---

### 14. fs.readdir(path, [options], callback)
Read contents of a directory.

---

### 15. fs.stat(path, callback)
Get metadata (size, timestamps, etc.).

---

### 16. fs.lstat(path, callback)
Like stat, but includes symbolic links.

---

### 17. fs.existsSync(path)
Check if a file/directory exists.

---

### 18. fs.copyFile(src, dest, callback)
Copy files from source to destination.

---

### 19. fs.utimes(path, atime, mtime, callback)
Update file timestamps.

---

### 20. fs.chmod(path, mode, callback)
Change file permissions.

---

### 21. fs.chown(path, uid, gid, callback)
Change file ownership.

---

### 22. fs.watch(path, [options], listener)
Watch for file/directory changes.

---

## 🧩 PROMISE-BASED API
```js
const fsPromises = require('fs').promises;
await fsPromises.readFile('data.txt', 'utf8');
await fsPromises.writeFile('log.txt', 'Log entry');
await fsPromises.mkdir('folder', { recursive: true });
```

---

## 🔥 STREAM PIPE EXAMPLE
```js
fs.createReadStream('source.txt').pipe(fs.createWriteStream('dest.txt'));
```

---

## ⚡ QUICK SUMMARY TABLE

| Operation | Async | Sync | Promise |
|------------|--------|------|----------|
| Read File | fs.readFile | fs.readFileSync | fsPromises.readFile |
| Write File | fs.writeFile | fs.writeFileSync | fsPromises.writeFile |
| Append | fs.appendFile | fs.appendFileSync | fsPromises.appendFile |
| Delete | fs.unlink / fs.rm | fs.unlinkSync | fsPromises.rm |
| Create Dir | fs.mkdir | fs.mkdirSync | fsPromises.mkdir |
| Read Dir | fs.readdir | fs.readdirSync | fsPromises.readdir |
| Stat | fs.stat | fs.statSync | fsPromises.stat |
| Copy | fs.copyFile | fs.copyFileSync | fsPromises.copyFile |

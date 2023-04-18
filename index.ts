import { promises as fs } from 'fs';
import * as path from 'path';
import rimraf from 'rimraf';


async function deleteNodeModules(dir: string): Promise<void> {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);

      const stats = await fs.stat(fullPath);
      if (stats.isDirectory()) {
        if (file === 'node_modules') {
          console.log(`Deleting ${fullPath}`);
          rimraf.sync(fullPath);
        } else {
          await deleteNodeModules(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function main(): Promise<void> {
  const currentDir = process.cwd();
  console.log(`Starting to delete node_modules folders in ${currentDir}`);
  await deleteNodeModules(currentDir);
  console.log('Finished deleting node_modules folders.');
}

main();
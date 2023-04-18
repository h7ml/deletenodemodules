"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = __importStar(require("path"));
const rimraf_1 = __importDefault(require("rimraf"));
async function deleteNodeModules(dir) {
    try {
        const files = await fs_1.promises.readdir(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stats = await fs_1.promises.stat(fullPath);
            if (stats.isDirectory()) {
                if (file === 'node_modules') {
                    console.log(`Deleting ${fullPath}`);
                    rimraf_1.default.sync(fullPath);
                }
                else {
                    await deleteNodeModules(fullPath);
                }
            }
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}
async function main() {
    const currentDir = process.cwd();
    console.log(`Starting to delete node_modules folders in ${currentDir}`);
    await deleteNodeModules(currentDir);
    console.log('Finished deleting node_modules folders.');
}
main();

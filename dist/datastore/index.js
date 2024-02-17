"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const Memorydb_1 = require("./Memorydb");
exports.db = new Memorydb_1.InMemoryDataStore();

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
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = require("dotenv");
const path = __importStar(require("path"));
const knexfile_1 = __importDefault(require("../knexfile"));
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.config)({ path: path.resolve(__dirname, '../../.env') });
const app = (0, express_1.default)();
exports.default = app;
const port = process.env.PORT || 8080;
const db = (0, knex_1.default)(knexfile_1.default[process.env.NODE_ENV || 'development']);
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.status(200).send('My API is up and running!');
});
app.get('/users', (req, res) => {
    const data = db('person').select('*');
    res.status(200).json(data);
});
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

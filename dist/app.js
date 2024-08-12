"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use('/', userRouter);
userRouter.get('/api/v1/user/create-user', (req, res) => {
    const user = req.body;
    res.send({ name: "jahid hasan" });
});
app.get('/', (req, res) => {
    res.send('jahid the best ');
});
app.post('/', (req, res) => {
    console.log('jahid :', req.body);
    res.send('posting');
});
exports.default = app;

#!/usr/bin/env node
import { MCPServer } from "mcp-framework";
import * as UnityConnection from "./unity/unityConnection.js";
import { dirname } from 'path';
// Debug logging
console.error('[DEBUG] argv[1]:', process.argv[1]);
console.error('[DEBUG] dirname:', dirname(process.argv[1]));
console.error('[DEBUG] endsWith dist:', dirname(process.argv[1]).endsWith('dist'));
const server = new MCPServer({
    name: "unity-mcp",
    version: "0.0.1"
});
server.start();
await UnityConnection.setupUnityConnection(6336);

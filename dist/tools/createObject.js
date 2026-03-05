import { MCPTool } from "mcp-framework";
import { z } from "zod";
import * as UnityConnection from "../unity/unityConnection.js";
class CreateObjectTool extends MCPTool {
    name = "create_object_tool";
    description = "Create unity 3d object";
    schema = {
        shape: {
            type: z.string(),
            description: "3d model shape",
        },
        position: {
            type: z.object({
                x: z.number(),
                y: z.number(),
                z: z.number(),
            }),
            description: "3d model position",
        },
    };
    async execute(input) {
        return await UnityConnection.sendToUnity(JSON.stringify({
            name: this.name,
            format: JSON.stringify(input)
        }));
    }
}
export default CreateObjectTool;

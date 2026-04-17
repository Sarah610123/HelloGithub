# blender-mcp

A Model Context Protocol (MCP) server that connects Blender to AI assistants like Claude, enabling prompt-driven 3D modeling, scene creation, and manipulation.

## Repository

https://github.com/ahujasid/blender-mcp

## What it does

blender-mcp bridges Blender and large language models through the MCP standard. Once the add-on is installed in Blender and the MCP server is connected to Claude (or another MCP-compatible client), the assistant can:

- Inspect the current scene: list objects, materials, cameras, and lights
- Create and modify primitives, meshes, and materials
- Run arbitrary Python code inside Blender
- Pull assets from Poly Haven (HDRIs, textures, models)
- Generate 3D models via Hyper3D Rodin
- Render the viewport and return images back to the assistant

## Components

- **Blender add-on** (`addon.py`) — runs a socket server inside Blender and exposes commands.
- **MCP server** (`src/blender_mcp/server.py`) — a Python MCP server that the AI client connects to; it forwards tool calls to the add-on.

## Quick start

1. Install the add-on in Blender (Edit → Preferences → Add-ons → Install).
2. In the 3D viewport sidebar, open the **BlenderMCP** panel and click **Connect to Claude**.
3. Configure your MCP client (e.g. Claude Desktop) to run `uvx blender-mcp`.
4. Ask the assistant to build or modify a scene.

## License

MIT

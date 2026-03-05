#!/bin/bash
# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Change to that directory and run the package
cd "$SCRIPT_DIR"
npx -y @iflow-mcp/dunward-unity-mcp-server "$@"
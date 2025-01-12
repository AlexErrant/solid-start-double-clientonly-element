// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

export async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getClientResource() {
  await sleep(200);
  return "clientResource"; // e.g. something from indexeddb
}

mount(() => <StartClient />, document.getElementById("app")!);

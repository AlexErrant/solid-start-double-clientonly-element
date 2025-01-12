import { createSignal } from "solid-js";
import "./Counter.css";
import { getClientResource } from "~/entry-client";
import { createAsync } from "@solidjs/router";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const resource = createAsync(getClientResource);
  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      {resource()} Clicks: {count()}
    </button>
  );
}

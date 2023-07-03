import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Modal from "../islands/Modal.tsx"

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh Chat App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
          style="margin: 0 auto"
        />
        <Modal />
      </div>
    </>
  );
}

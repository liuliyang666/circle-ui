import Dialog from "./Dialog.vue";
import { VNode, createApp, h } from "vue";

interface Options {
  title: string | VNode;
  content?: string;
  ok?: () => boolean | void;
  cancel?: () => void;
}

export const openDialog = (options: Options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible: boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};

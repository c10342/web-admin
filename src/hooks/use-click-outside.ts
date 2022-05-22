import { onBeforeUnmount, Ref, watch } from "vue";

export function useClickOutside(
  value: Ref<boolean>,
  cb: (event?: MouseEvent) => any
) {
  watch(value, (val) => {
    if (val) {
      document.addEventListener("click", cb);
    } else {
      document.removeEventListener("click", cb);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener("click", cb);
  });
}

import { computed, nextTick, provide, ref, Ref, watch } from 'vue'
import {modalsArray} from "@/layouts/types/modalsArray.ts";

export function useHasModals(content: Ref<HTMLElement | null>) {
    const modals = ref<modalsArray>([])
    const hasModals = computed(() => !!modals.value.values.length)
    provide('modals', modals)
    watch(hasModals, () => {
        nextTick().then(() => {
            if (content.value) {
                content.value.style.overflow = hasModals.value ? 'hidden' : 'overflow'
            }
        })
    })
}

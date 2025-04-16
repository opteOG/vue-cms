import type { Directive, DirectiveBinding } from 'vue';

const role: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    const role: string | null = localStorage.getItem('role');
    const allowRoles: string[] = binding.value;
    if (!role || !allowRoles.includes(role)) {
      el.parentNode?.removeChild(el);
    }
  },
};

export default role;

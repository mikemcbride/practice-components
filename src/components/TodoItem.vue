<template>
    <li class="flex items-center justify-between py-2">
        <slot />
        <button
            @click="$emit('remove')"
            class="p-1 text-gray-500 hover:text-red-600 focus:ring"
            aria-label="remove-todo-item"
        >
            &times;
        </button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
}
</script>

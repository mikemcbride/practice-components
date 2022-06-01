<template>
    <div class="max-w-xl">
        <input
            aria-label="add-todo-input"
            class="border border-gray-400 shadow-sm rounded mb-2 px-3 py-2 text-base"
            placeholder="Add todo..."
            v-model="todoText"
            @keypress.enter="addTodo"
        />

        <ul class="divide-y divide-gray-200">
            <TodoItem
                v-for="(item, idx) in items"
                :key="idx"
                @remove="removeTodo(idx)"
                >{{ item }}</TodoItem
            >
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    props: {
        initialItems: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {
            todoText: '',
            items: [],
        }
    },
    created() {
        if (this.initialItems) {
            this.items = [...this.initialItems]
        }
    },
    methods: {
        addTodo() {
            if (!this.todoText) return
            this.items.push(this.todoText)
            this.todoText = ''
        },
        removeTodo(index) {
            this.items = [
                ...this.items.slice(0, index),
                ...this.items.slice(index + 1),
            ]
        },
    },
}
</script>

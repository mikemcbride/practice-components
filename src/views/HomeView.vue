<script setup>
import MyComponent from '@/components/MyComponent.vue'
import CounterButtons from '@/components/CounterButtons.vue'
import MyAccordion from '@/components/MyAccordion.vue'
import TodoList from '@/components/TodoList.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import DropdownMenu from '@/components/DropdownMenu.vue'
</script>

<template>
    <main class="space-y-8">
        <MyComponent />
        <CounterButtons />
        <MyAccordion
            label-text="Open me plz"
            content="this is the top notch content you came here for"
        />
        <TodoList :initial-items="['one', 'two', 'three']" />

        <ProgressBar :value="99" />
        <DropdownMenu>
            <ul class="w-24">
                <li class="py-2 hover:bg-gray-100">Home</li>
                <li class="py-2 hover:bg-gray-100">About</li>
            </ul>
        </DropdownMenu>
        <p>Component ideas to build:</p>
        <ul class="list-disc">
            <li class="line-through">accordion</li>
            <li class="line-through">todo list (input with items)</li>
            <li>dropdown menu - button with nav links</li>
            <li>slide out panel</li>
        </ul>
    </main>
</template>

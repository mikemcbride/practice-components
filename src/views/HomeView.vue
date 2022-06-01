<script setup>
import MyComponent from '@/components/MyComponent.vue'
import CounterButtons from '@/components/CounterButtons.vue'
import MyAccordion from '@/components/MyAccordion.vue'
import TodoList from '@/components/TodoList.vue'
import ProgressBar from '@/components/ProgressBar.vue'
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
        <p>Component ideas to build:</p>
        <ul class="list-disc">
            <li class="line-through">accordion</li>
            <li>todo list (input with items)</li>
            <li>dropdown menu - button with nav links</li>
            <li>slide out panel</li>
        </ul>
    </main>
</template>

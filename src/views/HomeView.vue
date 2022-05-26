<script setup>
import MyComponent from '@/components/MyComponent.vue'
import CounterButtons from '@/components/CounterButtons.vue'
import MyAccordion from '@/components/MyAccordion.vue'
</script>

<template>
    <main class="space-y-8">
        <MyComponent />
        <CounterButtons />
        <MyAccordion
            label-text="Open me plz"
            content="this is the top notch content you came here for"
        />
        <p>Component ideas to build:</p>
        <ul class="list-disc">
            <li>accordion</li>
            <li>todo list (input with items)</li>
            <li>dropdown menu - button with nav links</li>
            <li>slide out panel</li>
            <li>
                combo box (select) - maybe too complicated for an interview, but
                good practice?
            </li>
        </ul>
    </main>
</template>

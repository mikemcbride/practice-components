<template>
    <div>
        <button
            class="w-full bg-blue-100 text-blue-700 rounded py-2 px-4 text-left font-bold focus:ring focus:ring-blue-300 focus:ring-offset-1"
            aria-label="accordion-label"
            @click="toggleContent"
        >
            {{ labelText }}
        </button>
        <section v-if="open">
            <p class="mt-2 rounded border border-gray-300 p-4">{{ content }}</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MyAccordion',
    props: {
        labelText: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            require: true,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    methods: {
        toggleContent() {
            this.open = !this.open
        },
    },
}
</script>

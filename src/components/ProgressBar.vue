<template>
    <div
        :class="progressRingClass"
        class="group h-6 rounded w-1/4 flex bg-white ring ring-offset-2"
    >
        <div
            data-testid="progress-bar"
            class="relative"
            :class="progressClass"
            :style="`width:${value}%`"
        >
            <span
                class="absolute right-0 hidden group-hover:block transform translate-x-1/2 -top-9 px-2 py-1 text-xs rounded bg-gray-100 border border-black"
                >{{ value }}%</span
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        value: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        progressClass() {
            let classes = ['rounded-l']
            if (this.value <= 25) {
                classes.push('bg-red-500')
            } else if (this.value <= 50) {
                classes.push('bg-yellow-500')
            } else {
                classes.push('bg-green-500')
            }
            if (this.value === 100) {
                classes.push('rounded-r')
            }
            return classes.join(' ')
        },
        progressRingClass() {
            if (this.value <= 25) {
                return 'ring-red-500'
            }
            if (this.value <= 50) {
                return 'ring-yellow-500'
            }
            return 'ring-green-500'
        },
    },
}
</script>

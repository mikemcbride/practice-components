<template>
    <div class="relative">
        <button @click="toggleMenu">Menu</button>
        <div
            v-if="isOpen"
            class="absolute top-full mt-2 shadow bg-white p-1"
            data-testid="dropdown-list"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropdownMenu',
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            if (this.isOpen) {
                this.closeMenu()
            } else {
                this.openMenu()
            }
        },
        openMenu() {
            this.isOpen = true
            this.addEventListeners()
        },
        closeMenu() {
            this.isOpen = false
            this.removeEventListeners()
        },
        handleClick(e) {
            if (!this.$el.contains(e.target)) {
                this.closeMenu()
            }
        },
        handleEscape(e) {
            if (e.code === 'Escape') {
                this.closeMenu()
            }
        },
        addEventListeners() {
            window.addEventListener('click', this.handleClick)
            window.addEventListener('keydown', this.handleEscape)
        },
        removeEventListeners() {
            window.removeEventListener('click', this.handleClick)
            window.removeEventListener('keydown', this.handleEscape)
        },
    },
}
</script>

<template>
	<div class="card">
        <div class="card-header">
            <slot name="header">#Header</slot>
        </div>
        <div class="card-body">
            <slot>#Body</slot>
            <!-- 이름을 주지 않으면 default named가 자동으로 붙는다. -->
        </div>
        <div class="card-footer text-muted">
            <slot name="footer">#Footer</slot>
        </div>
    </div>
</template>

<script>

export default {
	setup() {
		return {};
	},
};
</script>
<style lang="scss" scoped></style>
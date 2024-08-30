<script setup>

</script>

<template>
	<div class="border">
	<h1>TEST PARENT component</h1>

	<NamedSlot>
<!-- v-slot:one  -->
<template v-slot:one>
	<h1>This content for slot 1</h1>
</template>
<!-- #two  -->
<template #two>
	<h1>This content for slot 2</h1>
</template>
	</NamedSlot>

<div>
	<hr>
	<DefaultSlot>
<template #default>
	<div>
		<h1>THis is random default content </h1>
	</div>
</template>


	</DefaultSlot>
</div>

</div>


</template>
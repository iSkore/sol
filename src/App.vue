<template>
	<v-app>
		<Sidebar/>
		<Toolbar/>

		<v-content>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>

		<Footer/>
	</v-app>
</template>

<script>
	import { mapActions } from 'vuex';

	import Sidebar from '@/components/Sidebar';
	import Toolbar from '@/components/Toolbar';
	import Footer  from '@/components/Footer';

	export default {
		name: 'App',
		components: {
			Sidebar,
			Toolbar,
			Footer
		},
		data() {
			return {};
		},
		beforeCreate() {
			this.$installAxios();
			this.$installLogger();
		},
		async mounted() {
			await this.getConfig();

			this.$store.state.isMobile = window.innerWidth < 600;
		},
		methods: {
			...mapActions( [ 'getConfig' ] )
		}
	};
</script>

<style>
</style>

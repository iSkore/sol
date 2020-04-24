<template>
	<!--	<v-navigation-drawer-->
	<!--		app-->
	<!--		v-model="sidebar.model"-->
	<!--		:clipped="sidebar.clipped"-->
	<!--		:floating="sidebar.floating"-->
	<!--		:mini-variant="sidebar.mini"-->
	<!--		:permanent="sidebar.type === 'permanent'"-->
	<!--		:temporary="sidebar.type === 'temporary'"-->
	<!--		overflow-->
	<!--	/>-->
	<v-navigation-drawer
		app
		v-model="sidebar.model"
		:clipped="sidebar.clipped"
		:floating="sidebar.floating"
		:mini-variant="sidebar.mini"
		:permanent="sidebar.type === 'permanent'"
		:temporary="sidebar.type === 'temporary'"
		overflow
	>
		<template v-slot:prepend>
			<v-list
				class="pl-0"
				shaped
				nav
			>
				<v-list-item class="mb-5 justify-center white">
					<v-img
						src="@/assets/sol-icon.svg"
						max-width="58"
						max-height="58"
					/>
				</v-list-item>

				<v-list-item-group
					v-model="selectedItem"
					color="primary"
					mandatory
				>
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
						@click="item.fn"
						link
					>
						<v-list-item-icon>
							<v-icon v-text="item.icon"></v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title v-text="item.text"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Sidebar',
		data() {
			return {
				selectedItem: 0,
				items: [
					{
						name: 'soho',
						icon: 'mdi-home-outline',
						text: 'SOHO',
						fn: () => this.navigate( '/soho' )
					}
				]
			};
		},
		computed: {
			...mapState( [ 'sidebar' ] )
		},
		methods: {
			shouldNavigate( path ) {
				return this.$route.path !== path;
			},
			navigate( path ) {
				if ( this.shouldNavigate( path ) ) {
					this.$router.push( { path } );
				}
			}
		}
	};
</script>

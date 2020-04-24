<template>
	<v-container fluid>
		<v-card>
			<v-card-title>Solar and Heliospheric observatory</v-card-title>

			<v-row dense>
				<v-col
					v-for="(card, i) in sources.soho"
					:key="i"
					cols="4"
				>
					<v-card flat>
						<v-card-title>{{ card.name }}:</v-card-title>
						<v-img
							ref="img"
							lazy-src="@/assets/sol-icon.svg"
							:src="card.src"
							aspect-ratio="1"
							height="300px"
							width="300px"
						/>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
	import { mapState } from 'vuex';

	// TODO: add weather chart for SOHO
	// https://vuetifyjs.com/en/components/cards/#weather-card
	export default {
		name: 'Home',
		data() {
			return {
				src: ''
			};
		},
		computed: {
			...mapState( [ 'sources' ] )
		}
	};
</script>

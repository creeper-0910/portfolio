import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.name !== "") {
		return {
			name: params.name
		};
	}

	error(404, 'Not found');
};
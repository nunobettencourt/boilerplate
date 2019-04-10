import { normalize, schema } from 'normalizr';
import { SET_PRODUCTS } from '../actions/types';

export const normalizer = () => next => action => {
	if (action.type !== SET_PRODUCTS) return next(action);

	const { data } = action;

	// Adding a "products" array to each category
	const categoryProcessStrategy = (value, parent, key) => {
		if (key === 'categories') {
			return {
				...value,
				products: [parent.id],
			};
		}
	};

	// Merging a new product id to the "products" array
	// without this, each id previously added to the array would overwritten
	const categoryMergeStrategy = (entityA, entityB) => {
		return {
			...entityA,
			...entityB,
			products: [...entityA.products, ...entityB.products],
		};
	};

	// schemas used to normalize products and categories
	const categorySchema = new schema.Entity(
		'categories',
		{},
		{
			processStrategy: categoryProcessStrategy,
			mergeStrategy: categoryMergeStrategy,
		}
	);

	const productSchema = new schema.Entity('products', {
		categories: [categorySchema],
	});

	// Normalizing the incoming data
	const normalizedData = normalize(data, [productSchema]);

	next({
		...action,
		data: normalizedData,
	});
};

export default normalizer;

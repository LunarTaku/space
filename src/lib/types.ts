export type User = {
	id: string;
	email?: string;
	name: string;
	photo?: string;
	bio?: string;
};

export type Post = {
	title: string;
	created: Date;
	content: string;
	tags: string[];
	likes: string[];
	user: User;
	language: string;
};

const validateString = (string: string) => {
	return typeof string === 'string' && string.length > 0;
};

const validateArray = (array: string[]) => {
	return (
		Array.isArray(array) &&
		array.length > 0 &&
		array.reduce<boolean>((prev, cur) => (prev ? typeof cur === 'string' : prev), true)
	);
};

export function validateUser(data: User) {
	const idIsString = typeof data.id === 'string';
	const nameIsString = typeof data.name === 'string';

	return idIsString && nameIsString;
}

export function validatePost(data: Post) {
	if (
		!validateString(data.title) &&
		!validateString(data.content) &&
		!validateString(data.language) &&
		data.tags.length! > 0
	) {
		return false;
	}

	const validatedUser = validateUser(data.user);
	const validatedTags = validateArray(data.tags);
	const validatedLikes = validateArray(data.likes);

	return {
		user: validatedUser,
		tags: validatedTags,
		likes: validatedLikes
	};
}

export interface Posts {
	collectionId: string;
	collectionName: string;
	comments: string;
	content: string;
	created: Date;
	dislikes: number;
	favorites: number;
	id: string;
	image: string;
	likes: number;
	reports: string;
	tags: null;
	title: string;
	updated: Date;
	user: string;
}

export interface PBPost {
	collectionId: string;
	collectionName: string;
	comments: string;
	content: string;
	created: Date;
	dislikes: number;
	favorites: number;
	id: string;
	image: string;
	likes: number;
	reports: string;
	tags: string;
	title: string;
	updated: Date;
	user: string;
	expand: {
		user: {
			avatar: string;
			collectionId: string;
			collectionName: string; 
			created: Date;
			email: string;
			emailVisibility: boolean;
			id: string;
			name: string;
			updated: Date;
			username: string;
			verified: boolean;
		};
	};
}

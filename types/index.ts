export type StreamDetails = {
	id: string; 
	name: string;
	streamer: string;
	game: string;
	streamLink: string;
}

export type View = { type: 'catalog' } | { type: 'detail' } & StreamDetails

export type UserMessage = {
	id: string; userName: string; content: string;
}
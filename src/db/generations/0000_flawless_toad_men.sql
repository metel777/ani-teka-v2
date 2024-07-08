CREATE TABLE `users_lists` (
	`user_id` text,
	`media_type` text,
	`media_id` integer,
	`list` text,
	`score` integer,
	`watched_episodes` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text,
	`name` text
);

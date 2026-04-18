import { pgTable, unique, uuid, text, timestamp, foreignKey, boolean, integer, jsonb } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	username: text().notNull(),
	email: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const accounts = pgTable("accounts", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	provider: text().notNull(),
	providerId: text("provider_id").notNull(),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "accounts_user_id_fkey"
		}).onDelete("cascade"),
	unique("accounts_provider_provider_id_key").on(table.provider, table.providerId),
]);

export const collections = pgTable("collections", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	userId: uuid("user_id"),
	tapeId: uuid("tape_id"),
	listed: boolean().default(false),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "collections_user_id_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.tapeId],
			foreignColumns: [tapes.id],
			name: "collections_tape_id_fkey"
		}).onDelete("cascade"),
	unique("collections_user_id_tape_id_key").on(table.userId, table.tapeId),
]);

export const tapes = pgTable("tapes", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	genre: text(),
	creatorName: text("creator_name"),
	splineId: text("spline_id").notNull(),
	audioUrl: text("audio_url"),
	duration: integer("duration"), // total seconds
	timeline: jsonb("timeline").$type<{ time: number; title: string; artist?: string }[]>().default([]),
	releaseDate: timestamp("release_date", { mode: 'string' }).defaultNow(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});

export const trades = pgTable("trades", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	proposerId: uuid("proposer_id"),
	recipientId: uuid("recipient_id"),
	listedCollectionId: uuid("listed_collection_id"),
	tradeCollectionId: uuid("trade_collection_id"),
	status: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.proposerId],
			foreignColumns: [users.id],
			name: "trades_proposer_id_fkey"
		}),
	foreignKey({
			columns: [table.recipientId],
			foreignColumns: [users.id],
			name: "trades_recipient_id_fkey"
		}),
	foreignKey({
			columns: [table.listedCollectionId],
			foreignColumns: [collections.id],
			name: "trades_listed_collection_id_fkey"
		}),
	foreignKey({
			columns: [table.tradeCollectionId],
			foreignColumns: [collections.id],
			name: "trades_trade_collection_id_fkey"
		}),
]);

import { relations } from "drizzle-orm/relations";
import { users, accounts, collections, tapes, trades } from "./schema";

export const accountsRelations = relations(accounts, ({one}) => ({
	user: one(users, {
		fields: [accounts.userId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	accounts: many(accounts),
	collections: many(collections),
	trades_proposerId: many(trades, {
		relationName: "trades_proposerId_users_id"
	}),
	trades_recipientId: many(trades, {
		relationName: "trades_recipientId_users_id"
	}),
}));

export const collectionsRelations = relations(collections, ({one, many}) => ({
	user: one(users, {
		fields: [collections.userId],
		references: [users.id]
	}),
	tape: one(tapes, {
		fields: [collections.tapeId],
		references: [tapes.id]
	}),
	trades_listedCollectionId: many(trades, {
		relationName: "trades_listedCollectionId_collections_id"
	}),
	trades_tradeCollectionId: many(trades, {
		relationName: "trades_tradeCollectionId_collections_id"
	}),
}));

export const tapesRelations = relations(tapes, ({many}) => ({
	collections: many(collections),
}));

export const tradesRelations = relations(trades, ({one}) => ({
	user_proposerId: one(users, {
		fields: [trades.proposerId],
		references: [users.id],
		relationName: "trades_proposerId_users_id"
	}),
	user_recipientId: one(users, {
		fields: [trades.recipientId],
		references: [users.id],
		relationName: "trades_recipientId_users_id"
	}),
	collection_listedCollectionId: one(collections, {
		fields: [trades.listedCollectionId],
		references: [collections.id],
		relationName: "trades_listedCollectionId_collections_id"
	}),
	collection_tradeCollectionId: one(collections, {
		fields: [trades.tradeCollectionId],
		references: [collections.id],
		relationName: "trades_tradeCollectionId_collections_id"
	}),
}));
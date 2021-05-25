import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProcedureSchema = new Schema({
	title: String,
	description: String,
	date: {type: Date, default: Date.now },
});

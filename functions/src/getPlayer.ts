import express from "express"
import { firestore } from "firebase-admin"
import { onRequest } from "firebase-functions/v2/https"

const app = express()
app.get("/:uid", async (req, res) => {
	const doc = await firestore()
		.collection("players")
		.doc(req.params.uid)
		.get()

	const data = doc.data()

	if (!data) {
		res.status(400)
		res.json("invalid player UID")
	}

	res.json(data)
})

export const getPlayer = onRequest(app)
